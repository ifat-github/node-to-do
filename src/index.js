const express = require('express');
require('./db/mongoose');
const cors = require('cors');
const ToDo = require('./models/todo');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.post('/todos', (req, res) => {
    const todo = new ToDo(req.body);

    todo.save().then(() => {
        res.send(todo);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.get('/todos', (req, res) => {
    ToDo.find({}).then((todos) => {
        res.send(todos);
    }).catch((e) => {
        res.status(500).send();
    })
})

app.patch('/todos/:id', async (req,res) => {
    try {
        const todo = await ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!todo) {
            return res.status(404).send();
        }

        res.send(todo);
    } catch (e) {
        res.status(400).send(e);
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})