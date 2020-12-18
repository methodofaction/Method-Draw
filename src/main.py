from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from deta import Deta

deta = Deta()
db = deta.Base("method-state")

app = FastAPI()

@app.post("/api")
async def save(r: Request):
    data = await r.json()
    db.put(data)
    return data

@app.get("/api")
def fetch():
    return next(db.fetch())

@app.get("/api/{key}")
def get(key: str):
    return db.get(key)


app.mount("/", StaticFiles(directory=".", html="true"), name="static")

