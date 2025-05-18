const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv").config()
const connectDB = require("./config/db")
const dataRoute = require("./routes/data.routes")

let PORT = process.env.PORT || 8080

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json())
app.use("/api/data", dataRoute)


app.listen((PORT),() => {
    console.log(`Server is running on port ${PORT}`)
    console.log(`http://localhost:${PORT}`)
    connectDB()
})
