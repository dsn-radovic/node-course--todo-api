const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// var id = '59f048421b3d6850398d3361';

// if(!ObjectID.isValid(id)) {
//     console.log("ID not valid!");
// }
// Todo.find({
//     _id:id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({_id:id}).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("Not found!");
//     }
//     console.log('Todo', todo);
// });

var user_id = '59ef3a3e9bf9ad8831254299';

User.findById(user_id).then((user) => {
    if(!user){
        return console.log("Not found!");
    }
    console.log(`User: ${user}`);
}).catch((e) => {
    console.log(e);
})

