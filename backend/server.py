from flask import Flask 
from flask_cors import CORS
import sqlite3
import os 

CURRENT_FOLDER = os.path.dirname(os.path.abspath(__file__))
DB_FOLDER = os.path.join(CURRENT_FOLDER , "instance")

os.makedirs(DB_FOLDER , exist_ok= True)

DATABASE_SCHEMA = os.path.join(DB_FOLDER , "schema.db")

conn =sqlite3.connect(DATABASE_SCHEMA)

cur = conn.cursor()
cur.execute("""
    CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT ,
            name VARCHAR (10) NOT NULL ,
            email TEXT NOT NULL);
""")

cur.execute("""
INSERT INTO users (name, email) VALUES
('Ama', 'ama@email.com'),
('Kojo', 'kojo@email.com'),
('Yaw', 'yaw@email.com'),
('Abena', 'abena@email.com'),
('Kofi', 'kofi@email.com');
""")

conn.commit()
conn.close()





server = Flask(__name__)
CORS(server)



if __name__ == "__main__":
    server.run(debug=True)
