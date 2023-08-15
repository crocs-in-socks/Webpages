const express = require("express")
const axios = require("axios")
const router = express.Router()
const dotenv = require("dotenv")

dotenv.config()

const baseURL = "https://api.openweathermap.org/data/2.5/weather"

router.get("/", (req, res) => {
    res.send("Home page baby.")
})

router.get("/weather", async (req, res) => {
    const cityName = req.query.q

    console.log(`Requested weather for ${cityName}`)
    const url = `${baseURL}?q=${cityName}&appid=${process.env.API_KEY}&units=metric`;
    console.log(url)

    try
    {
        const response = await axios.get(url)
        const weatherData = response.data
        res.json(weatherData)
    }
    catch(error)
    {
        console.error(error)
        res.status(500).json({ error: "An error occured while fetching weather data."})
    }
})

module.exports = router