import React, {Component} from "react"
import Container from  "./Components/Container"
import Header from "./Components/Header"
import "./App.css"

class App extends Component
{
    render()
    {
        return (
          <div className="App">
            <Header />
            <Container />
          </div>
        )
    }
}

export default App