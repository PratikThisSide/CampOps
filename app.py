from flask import Flask, render_template, request
from db_config import get_connection

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/submit", methods=["POST"])
def submit():
    name = request.form["name"]
    building = request.form["building"]
    room = request.form["room_number"]
    desc = request.form["description"]

    conn = get_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO requests (name, building, room_number, description) VALUES (%s, %s, %s, %s)",
        (name, building, room, desc)
    )
    conn.commit()
    cursor.close()
    conn.close()

    return "Request submitted successfully!"

if __name__ == "__main__":
    app.run(debug=True)
