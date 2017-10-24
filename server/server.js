var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((result) => {
        res.send(result);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.listen(3000, () => {
    console.log("Started on 3000");
});



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