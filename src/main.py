import os
from fastapi import FastAPI, Request, File, UploadFile, HTTPException, Form
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse, StreamingResponse, RedirectResponse, FileResponse
from deta import Deta
from pydantic import BaseModel
from datetime import datetime
from state import *

deta = Deta()

base = deta.Base("drawings")

drive = deta.Drive("drawings")

app = FastAPI()

class Drawing(BaseModel):
    public: bool = False

def get_all(db, query):
    blob_gen = db.fetch(query)
    blobs = []
    for stored_blob in blob_gen:
        for blob in stored_blob:
            blobs.append(blob)
    return blobs

@app.middleware('http')
async def add_no_cache(request: Request, call_next):
    response = await call_next(request)
    if request.url.path == "/":
        response.headers["Cache-control"] = "no-store"
    return response

@app.get("/api/drawings")
def get_drawings_handler():
    drawings = get_drawings()
    if drawings:
        return drawings
    else:
        raise HTTPException(status_code=502, detail="Internal server error")

@app.get("/api/drawings/{name}")
def get_drawing_handler(name: str):
    drawing = get_drawing(name)
    if drawing:
        return drawing
    raise HTTPException(status_code=404, detail="Drawing doesn't exist")

# save as
@app.post("/api/saveas")
def upload_img(file: UploadFile = File(...), overwrite: bool = Form(False)):
    name = file.filename
    f = file.file
    # base and drive fix logic, unique names
    success = save_as(name, f, overwrite)
    if success:
        return {"message": "success"}
    else:
        raise HTTPException(status_code=409, detail="Drawing already exists")

# save
@app.post("/api/save")
def save_drawing_handler(file: UploadFile = File(...)):
    name = file.filename
    f = file.file
    success = save(name, f)
    if success:
        return {"message": "success"}
    else:
        raise HTTPException(status_code=502, detail="Internal server error")


@app.delete("/api/drawings/{name}", status_code=200)
def delete_drawing_handler(name: str):
    did_delete = delete_drawing(name)
    if did_delete:
        return {"message": "success"}
    else:
        raise HTTPException(status_code=502, detail="Internal server error")

# toggle public
@app.put("/api/public/{name}")
def modify_public_handler(name: str, drawing: Drawing):
    did_toggle = modify_public(name, drawing.public)
    if did_toggle:
        return {"message": "success"}
    else:
        raise HTTPException(status_code=502, detail="Internal server error")

@app.get("/api/metadata/{name}")
def metadata_handler(name:str):
    drawing = get_metadata(name)
    if drawing:
        return drawing
    else:
        raise HTTPException(status_code=502, detail="Internal server error")

#public
@app.get("/public/raw/{name}")
def stream_drawing(name: str):
    drawing = get_public_drawing(name)
    if drawing:
        return StreamingResponse(drawing.iter_chunks(1024), media_type="image/svg+xml")
    else:
        return FileResponse("./404.svg")

#public
@app.get("/public/bytes/{name}")
def public_bytes_handler(name: str):
    drawing = get_public_drawing(name)
    if drawing: 
        return drawing.read()
    else:
        raise HTTPException(status_code=502, detail="Internal server error")


app.mount("/public", StaticFiles(directory=".", html="true"), name="static")
app.mount("/", StaticFiles(directory=".", html="true"), name="static")
