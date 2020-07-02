from flask import Flask

from model import db,Symptom
import config
import logging
import time
import json

log = logging.getLogger(__name__)
MAX_CONNECT_TRIES = 3
SLEEP_TIME = 1

def create_app():
    flask_app = Flask(__name__)
    flask_app.config['SQLALCHEMY_DATABASE_URI'] = config.DATABASE_CONNECTION_URI
    flask_app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    flask_app.app_context().push()
    db.init_app(flask_app)
    # in case DB is temporarily down
    for i in range(0, MAX_CONNECT_TRIES + 1):
      try:
        db.create_all()
        break
      except:
        log.exception('Creating db connection')
        if i == MAX_CONNECT_TRIES:
          raise Exception("Could not connect to the database after {} tries".format(i))
        time.sleep(SLEEP_TIME)

    return flask_app

def load_symptoms():
  n = db.engine.execute("select count(*) from symptom").scalar()
  if n:
    return
  with open('symptoms_data.json') as f:
    data = json.load(f)
    recs = [Symptom(**s) for s in data["symptoms"]]
    db.session.add_all(recs)
    db.session.commit()

def load_init_data():
  load_symptoms()