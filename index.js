const express = require('express')
const cors = require('cors')
const BodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(BodyParser.urlencoded({
    extended: false
}));
app.use(BodyParser.json());

app.use('/api/history', require('./api/route'));


const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
    console.log('App is Running on PORT' + ' ' + PORT)
    mongoose.connect('mongodb+srv://raihan:raihan@cluster0.uknw9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });


})