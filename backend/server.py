from flask import Flask 
from flask_cors import CORS
import sqlite3
import os 

CURRENT_FOLDER = os.path.dirname(os.path.abspath(__file__))
DB_FOLDER = os.path.join(CURRENT_FOLDER , "instance ")

os.makedirs(DB_FOLDER , exist_ok= True)

DATABASE_SCHEMA = os.path.join(DB_FOLDER , "schema.db")





# server = Flask(__name__)
# CORS(server)



# if __name__ == "__main__":
#     server.run(debug=True)
