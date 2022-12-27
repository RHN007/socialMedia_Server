const express = require('express');
const app = express()
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./router/users')
const authRoute = require ('./router/auth')
const postRoute = require("./router/post");
const cors = require('cors');
app.use(cors())
mongoose.set('strictQuery', true)
require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log(' Connected to MongoDB')
});


//Middleware 

app.use(express.json())
app.use(helmet())
app.use(morgan("common"))


app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use("/api/posts", postRoute);

app.get('/', (req, res) => {
    res.send('Welcome to Homepage')
})

app.get('/users', (req,res) => {
    res.send('Welcome to user page')
})





app.listen(9000, () => {
    console.log('Backend Server is running')
 })