import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import WeatherForm from "./WeatherForm";
import WeatherInfoPanel from "./WeatherInfoPanel";

class Container extends Component {
    state = {
        weatherData: ""
    }

    constructor(props) {
        super(props);
        
        // Set initial state from localStorage
        const storedData = localStorage.getItem("CurrentWeatherData");
        this.state = {
            weatherData: storedData ? JSON.parse(storedData) : {}
        };
    }

    componentDidMount()
    {
        console.log("Re-rendered")
        const CurrentWeatherData = localStorage.getItem("CurrentWeatherData")
        if(CurrentWeatherData)
        {
            this.setState({weatherData: JSON.parse(CurrentWeatherData)})
        }
    }
    

    render() {
        return (
            <div className="container mt-4" style={{ width: "80%" }}>
                <Card>
                    <Card.Body>
                        <Row>
                            <Col md={8} className="d-flex flex-column justify-content-between"> {/* Center contents */}
                                <div className="mb-3">
                                    <WeatherInfoPanel weatherData={this.state.weatherData} />
                                </div>
                            </Col>
                            <Col md={4} className="d-flex justify-content-center"> {/* Center contents */}
                                <WeatherForm />
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default Container;
