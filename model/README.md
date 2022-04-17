## Information about the model.
### Datasets
we used the uci machine learning repository wildfire data set https://archive.ics.uci.edu/ml/datasets/forest+fires
### methodology
We decided to transform the area column into a binary 0 or 1 to represent fire or no fire and utilized columns: temp, RH, wind, rain for model input because our goal was to use real time weather data to predict likelyhood of fire. 

In order to find a suitutable model we tested multiple regression techniques: RandomForest, linearRegression and PolynomialRegression out of which we chose RandomForest.
### accuracy
Accuracy of our model wasn't the best with a RMSE of 0.26 and an R^2 value of ~0, we attributed this to our dataset being quite small and our limited access to live predictor metrics (temp, RH, wind, rain).

## Flask server
port 3080
