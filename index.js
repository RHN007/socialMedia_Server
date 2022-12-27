const express = require('express');
const app = express()
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./router/users')
const authRoute = require ('./router/auth')

mongoose.set('strictQuery', true)

require('dotenv').config()

mongoose.connect(process.env.MONGO_URL, () => {
    console.log(' Connected to MongoDB')
});


//Middleware 

app.use(express.json())
app.use(helmet())
app.use(morgan())


app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)

app.get('/', (req, res) => {
    res.send('Welcome to Homepage')
})

app.get('/users', (req,res) => {
    res.send('Welcome to user page')
})





app.listen(9000, () => {
    console.log('Backend Server is running')
 })