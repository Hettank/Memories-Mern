const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require("body-parser")
const postRouter = require('./routes/postRoutes')
const app = express()

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}))


app.use('/posts', postRouter)

const connectionString = "mongodb+srv://hettank34:hettank34@cluster0.ld4jril.mongodb.net/Post"
const port = 5000

mongoose.connect(connectionString)
    .then(() => {
        console.log("Connected to the database")
        app.listen(port, () => console.log(`Listening at port ${port}`))
    })
    .catch((err) => console.log(err))