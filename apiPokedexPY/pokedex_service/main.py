from flask import Flask
from flask import json
from flask_mysql_connector import MySQL


app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '229729'
app.config['MYSQL_DB'] = 'pokedex'
mysql = MySQL(app)

@app.route('/')
def main():
    response = app.response_class(
        response='API is working',
        status=200,
        mimetype='application/json'
    )
    return response

@app.route('/pokedex')
def dataPokedex():
    cur = mysql.new_cursor(dictionary=True)
    cur.execute('SELECT * FROM pokedex.pokedex;')
    response = cur.fetchall()
    return str(response)

