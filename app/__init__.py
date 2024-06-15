from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func
from dotenv import load_dotenv
import os

load_dotenv()



app = Flask(__name__, template_folder='../templates', static_folder='../static')
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('HASHBANC')
app.config['SECRET_KEY']= 'securit'

db = SQLAlchemy(app)

