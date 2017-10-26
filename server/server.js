const _ = require('lodash');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (e) => {
        res.status(400).send(e);
    })
})

// get /todos/:id

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {

        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => {
        res.status(400).send();
    })
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => {
        res.status(400).send();
    })
})

app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    
    var body = _.pick(req.body, ['text', 'completed']);
    
    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    if(_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if(!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => {
        res.status(400).send();
    })
})

// POST Users

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    })
})

app.listen(3000, () => {
    console.log("Started on 3000");
});

module.exports = {app};


// var newTodo = new Todo({
//     text: 'Do smth interesting',
//     completed: true,
//     completedAt: 23
// });

// newTodo.save().then((result) => {
//     console.log('Saved', result);
// }, (e) => {
//     console.log('Not saved');
// });



// var newUser = new User({
//     email: 'dsn@example.com',
//     password: 'sifra'
// })

// newUser.save().then((result) => {
//     console.log("User saved!");
// }, (e) => {
//     console.log("Unable to save user");
// })