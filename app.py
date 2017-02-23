from flask import Flask, render_template, g
import sqlite3
app = Flask(__name__)
app.database = "CCMS.db"
# @app.route('/')
# def home():
#     return "Hello world!"

@app.route('/')
def welcome():
    g.db = connect_db()
    curs = g.db.execute("Select name, surname from Users WHERE Type='Student'")
    students = []
    for record in curs:
        student = [record[0], record[1]]
        students.append(student)
    return render_template("welcome.html", students=students)

@app.route('/contact')
def contact():
    return render_template("contact.html")

def connect_db():
    return sqlite3.connect(app.database)
if __name__ == '__main__':
    app.run(debug=True)