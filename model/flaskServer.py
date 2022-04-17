# run "pip install -r requirements.txt to get packages"
from flask import Flask, jsonify, make_response, request
import pandas as pd
import joblib

app = Flask(__name__)

@app.route('/getMachineData', methods=['POST'])
def predict():
    json_ = request.json
    query_df = pd.DataFrame(json_, index=[0])
    prediction = model.predict(query_df)
    # print(query_df, prediction)
    response = jsonify({'prediction': list(prediction)})
    return response, 200


if __name__ == '__main__':
    model = joblib.load('model.pkl')
    app.run(port=3080)