import os
from deta import Deta
from datetime import date, datetime
from fastapi import HTTPException
import urllib
import base64

deta = Deta(os.getenv("PROJ_KEY"))


def get_base():
    return 

base = deta.Base("drawings")

drive = deta.Drive("drawings")

def get_all(db, query):
    blob_gen = db.fetch(query)
    blobs = []
    for stored_blob in blob_gen:
        for blob in stored_blob:
            blobs.append(blob)
    return blobs

# list all drawings
def get_drawings():
    return get_all(base, {})


# save
def save(name, file, overwrite):
    encoded_name = str(base64.urlsafe_b64encode(name.encode("utf-8")), 'utf-8')
    b = base.get(encoded_name)
    record = {"key": encoded_name, "name":name, "public": False, 'lastModified': datetime.utcnow().timestamp()}
    if (overwrite or not b): # Overwrite allowed or Record Does not Exist
        base.put(record)
        drive.put(name, file)
        return record
    else:  # Overwrite False and Record Exists
        return None


def get_drawing(name):
    encoded_name = str(base64.urlsafe_b64encode(name.encode("utf-8")), 'utf-8')
    b = base.get(encoded_name)
    d = drive.get(name)
    if (b and d):
        return d.read()
    base.delete(encoded_name)
    drive.delete(name)
    return None