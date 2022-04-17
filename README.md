# Firesight

## Inspiration
With an ever-growing concern of climate change and global warming, it is becoming more important for human beings to keep track of natural disasters that impact them close to home. We built Firesight to prepare for a future where wildfires are becoming more common than ever. 

## What it does
Firesight predicts the likelihood of fire in any location in the US using our custom trained machine learning model.


## How we built it
We trained the machine learning model on historical fire and weather data using sklearn's random forest regression.
We created several internal apis using python/Flask for the model data api and node/express for the weather and python middleman apis to get real time weather data based on location to feed to our model in order to get a prediction and communicate with our front end based on vue.js!
## Challenges we ran into
Finding good training data was the toughest challenge we encountered. We attempted to create our own dataset by matching existing fire data with their historical weather data but ran into api query limits. In the interest of time we used a smaller UCI machine learning dataset which contained both fire and weather data, the resulting model's accuracy suffered but still demonstrates the overall goal of the project.
## Accomplishments that we're proud of
This project included many moving parts, interaction with external weather apis, and two internal api servers in python and node, orchestrating the interactions between all these parts with the front end and then hosting everything on heroku was definitely something we were proud of. 
## What we learned
We learned a lot of about various things:
In the backend we learned about how to interact with external apis, create a Flask server to host the python model and connect our python and node servers together to seamlessly serve prediction data to our front end. We also learned how to use the javascript environment Node as the intermediate layer to communicate with the backend flask server.

machine learning: we learned how to train and evaluate models with sklearn and about random forest regression, linear regression and polynomial regression.

Frontend, what we're proud of is using Vue.js for the first time to build a modern website that not only looks good but feels responsive to the user. 

## What's next for FireSight
Better datasets to correlate fire and weather data, a better trained/more optimized model.
Heatmap to represent risk for larger areas not just cities, allow user to view more information than just model calculated risk such as weather data, resources relating to wildfire prevention.