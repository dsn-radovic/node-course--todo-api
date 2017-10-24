const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected!");

    // db.collection('Users').find({
    //     name: 'Dusan'
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch!");
    // })

    db.collection('Users').find().count().then((count) => {
        console.log(count);
    }, (err) => {
        console.log("Unable to count!");
    })
    db.close();
});