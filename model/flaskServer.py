# run "pip install -r requirements.txt to get packages"
from flask import Flask, jsonify, make_response
import joblib

app = Flask(__name__)

@app.route('/getMachineData', methods=['POST'])
def predict():
    json_ = request.json
    query_df = pd.DataFrame(json_)
    prediction = model.predict(query_df)
    response = make_response(
            jsonify(
                {'prediction': list(prediction)}
            ),
            200,
        )
    response.headers["Content-Type"] = "application/json"
    return response

# def hello_world():
#     response = make_response(
#                 jsonify(
#                     {"message": "Hello"}
#                 ),
#                 200,
#             )
#     response.headers["Content-Type"] = "application/json"
#     return response

if __name__ == '__main__':
    model = joblib.load('model.pkl')
    app.run(port=3080)