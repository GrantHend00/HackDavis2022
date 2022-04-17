from flask import Flask, jsonify, make_response

app = Flask(__name__)


@app.route('/getMachineData')
def hello_world():
    response = make_response(
                jsonify(
                    {"message": "Hello"}
                ),
                200,
            )
    response.headers["Content-Type"] = "application/json"
    return response

if __name__ == '__main__':
    app.run(debug=True)