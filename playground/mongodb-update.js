const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected!");

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("59e9be2cc240742c1ed486e0")
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("59ef019a4f5ac8923aeb397b")
    }, {
        $set: {
            age: 36
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.close();
});