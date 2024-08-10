const mongoose = require('mongoose')
// mongoose is a wrapper around mongodb, it allows us to use mongodb in nodejs

const TodoSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false
    }
})

const TodoModel= mongoose.model('todos', TodoSchema)

module.exports = TodoModel