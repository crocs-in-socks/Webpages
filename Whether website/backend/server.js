const dotenv = require("dotenv")
const express = require("express")
const routes = require("./api/routes")

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use("/", routes)

app.use("*", (req, res) => res.status(404).json({ error: "Page not found."}))

app.listen(port, () => console.log(`Listening on port: ${port}`))