const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
const {ObjectID} = require('mongodb');

// Todo.remove({}).then((res) => {
//     console.log(result);
// })

Todo.findByIdAndRemove('59f080536f61f308a1a6b245').then((doc) => {
    console.log(doc);
})

