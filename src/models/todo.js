const mongoose = require('mongoose');

const ToDo = mongoose.model('ToDo', {
    title: {
        type: String
    }, 
    isDone: {
        type: Boolean
    }
})

module.exports = ToDo;