const express = require("express");
const axios = require("axios");
const app = express();
const PORT =  process.env.PORT || 3000;

app.get('/weather/lat/:lat/long/:long', async (req, res) => {
    // res.send(req.params)
    let weather_data = await get_weather(req.params.lat, req.params.long);
    // console.log(`Status: ${weather_data.status} ${weather_data.statusText}`);
    res.json(weather_data);
})

const get_weather = async (lat, long)=> {
    // FIND GRIDPOINT USING LAT AND LONG
    // https://api.weather.gov/points/{latitude},{longitude}
    const urlBase = "https://api.weather.gov/";
    let weather_obj = {};
    let url = `${urlBase}points/${lat},${long}`
    try {
        const pointData = await axios.get(url);
        let forecast = pointData.data.properties.forecastHourly
        let grid_data = pointData.data.properties.forecastGridData
        console.log(forecast)
        try {
            const weatherData = await axios.get(forecast);
            weather_obj.forecast = weatherData.data.properties.periods[0];
            // console.log(weather_obj)
            try {
                const gridData = await axios.get(grid_data);
                for (let [key, value] of Object.entries(gridData.data.properties)) {
                    if(value.values) {
                        weather_obj.forecast[key] = value.values[0]
                    } else {
                        weather_obj.forecast[key] = value
                    }
                }
                return(weather_obj);
            } catch(exception) {
                process.stderr.write(`ERROR received from ${grid_data}: ${exception}\n`);
                return("invalid request")
            }
        } catch (exception) {
            process.stderr.write(`ERROR received from ${forecast}: ${exception}\n`);
            return("invalid request")
        }
    } catch (exception) {
        process.stderr.write(`ERROR received from ${url}: ${exception}\n`);
        return("invalid request")
    }

    //  GET FORCAST OF 2KM GRID
    // https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast

}

app.listen(PORT, ()=> process.stdout.write(`Server is running port: ${PORT}\n`));
