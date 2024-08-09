const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel= require('./Models/Todo')


const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://poovendranselvaraj333:poove@cluster0.waobb.mongodb.net/')

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err=> console.log(err))   
})

app.listen(3001, () => {
    console.log('Server is Running')
})

 