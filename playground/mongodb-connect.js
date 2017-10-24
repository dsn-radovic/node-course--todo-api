const {MongoClient, ObjectID} = require('mongodb');


var user = {
    name: 'Dusan',
    age: 26
}

var {name} = user;
console.log(name);



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected!");

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Unable to insert!", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne(user, (err, result) => {
        if(err){
            return console.log(err);
        }

        console.log(JSON.stringify(result.ops[0]._id.getTimestamp() , undefined, 2));
    });

    db.close();
});