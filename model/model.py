import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
import joblib

# load data into pandas dataframe
# db = sqlite3.connect('/FPA_FOD_20170508.sqlite')
df = pd.read_csv("forestfires.csv")

for j in range(df.shape[0]):
  if  df['area'][j]>0:
    df['area'].at[j]=1

X = df[["temp", "RH", "wind", "rain"]]
Y = df["area"]
# X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0, random_state=0)

sc = StandardScaler()
X = sc.fit_transform(X)
# X_test = sc.fit_transform(X_test)
regressionRF = RandomForestRegressor()
regressionRF.fit(X, Y)

joblib.dump(regressionRF, 'model.pkl')