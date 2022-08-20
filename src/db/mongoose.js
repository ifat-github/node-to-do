const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/to-do-manager', {
    useNewUrlParser: true,
})

// const ToDo = mongoose.model('ToDo', {
//     title: {
//         type: String
//     }, 
//     isDone: {
//         type: Boolean
//     }
// })

// const todo = new ToDo({
//     title: "Clean",
//     isDone: false
// });

// todo.save().then(() => {
//     console.log(todo)
// }).catch(error => {
//     console.log('Error!', error)
// });

// {"key":981,"title":"222","isDone":false}