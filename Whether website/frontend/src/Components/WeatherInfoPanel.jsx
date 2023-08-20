import React, { Component } from "react";

class WeatherInfoPanel extends Component {
    render() {

        const {weatherData} = this.props
        if (Object.keys(weatherData).length > 0) {
            
            const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

            return (
                <section className="weather-info d-flex justify-content-center align-items-center">
                    <div className="text-center">
                        <h2 className="city-name">{weatherData.name}</h2>

                        <section className="overcast text-center d-flex justify-content-between">
                            <img src={iconUrl} className="overcast-img" alt=""/>
                            <span className="overcast-description">{weatherData.weather[0].description}</span>
                        </section>

                        <section className="current-weather text-center d-flex flex-column justify-content-between align-items-center">
                            <span className="humidity">Humidity: {weatherData.main.humidity}%</span>
                            <span className="curr-temp">Temp: {weatherData.main.temp}°C</span>
                            <span className="feels-like">Feels like: {weatherData.main.feels_like}°C</span>
                        </section>

                        <section className="temps text-center d-flex justify-content-between">
                            <span className="min-temp">Low: {weatherData.main.temp_min}°C</span>
                            <span className="max-temp">High: {weatherData.main.temp_max}°C</span>
                        </section>
                    </div>
                </section>
            );
        }

        return (
            <section>
                WeatherInfo
            </section>
        )
}
}

export default WeatherInfoPanel;
