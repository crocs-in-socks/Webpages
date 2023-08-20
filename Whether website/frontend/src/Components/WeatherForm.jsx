import React, {Component} from "react"
import { Form, Button } from "react-bootstrap";
import axios from "axios"

class WeatherForm extends Component
{
    state = {
        cityNameInput: "Vellore"
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount()
    {
        this.refreshSavedWeather()
    }

    refreshSavedWeather = () => {

        if(localStorage.getItem("cityName"))
        {
            axios.get(`/weather?cityName=${this.state.cityNameInput}`).then(
                response => {
                    // this.props.saveWeatherData(response.data)
                    localStorage.setItem("CurrentWeatherData", JSON.stringify(response.data))
                }
            )
        }
    }

    saveFormData = (event) => {

        event.preventDefault()

        try
        {
            axios.get(`/weather?cityName=${this.state.cityNameInput}`).then(
                response => {
                    let weatherData = response.data
                    this.saveToLocalStorage(weatherData)
                }
            )
        }
        catch (e)
        {
            console.error("Couldn't get weather from api.")
            this.saveToLocalStorage(null)
        }

    }

    saveToLocalStorage = (weatherData) => {
        localStorage.setItem("cityName", this.state.cityNameInput)
        localStorage.setItem("CurrentWeatherData", JSON.stringify(weatherData))
    }

    render()
    {
        return (
            <Form onSubmit={this.saveFormData}>
                <Form.Label>City Name : </Form.Label>
                <Form.Control name="cityNameInput" type="text" placeholder="Enter city name" onChange={this.onChange} className="cityNameInput" />
                <Button variant="primary" type="submit" className="w-100 mt-2">
                    Search
                </Button>
            </Form>
        )
    }
}

export default WeatherForm