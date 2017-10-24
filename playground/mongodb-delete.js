const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log("Unable to connect to MongoDB");
    }
    console.log("Connected!");

    //deleteMany  
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(`Deleted ${result}`);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) => {
    //     console.log(`Deleted ${result}`);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed :false}).then((result) => {
    //     console.log(`Deleted ${result}`);
    // })

    db.collection('Users').deleteMany({age: '26'});

    db.close();
});