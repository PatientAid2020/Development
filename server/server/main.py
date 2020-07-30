import os

from flask import Flask, Response, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DB_URI','postgresql://postgres:@localhost/postgres')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

@app.route('/api')
def hello_world():
    try:
        val = db.engine.execute('SELECT * FROM pg_catalog.pg_tables;').first()
    except Exception as e:
        app.logger.exception(e)
        return 'Something went wrong :('
    else:
        return f'The db says {val}'

@app.route('/api/submit')
def submit():
    
    user_data = request.json
    #do something
    print(user_data)

    return Response(headers={
        'Status':202,
        })


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
