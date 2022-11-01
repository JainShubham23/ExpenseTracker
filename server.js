const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDb = require('./config/connectDB')
const path = require('path')
//rest object
const app = express()

//adding the middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//config dot env file
dotenv.config();

//database call
connectDb();

//adding the routes
//user route
app.use('/api/v1/user', require('./routes/userRoute'))


//initializing the port - 8080 on development mode and in production takes from process.env
const PORT = 8080 || process.env.PORT

//listening the server

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

