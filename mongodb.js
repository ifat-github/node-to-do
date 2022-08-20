// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'to-do-manager';

// MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to DB!');
//     }

//     // const db = client.db(databaseName);

//     // db.collection('users').insertMany([{
//     //     name: 'Ifaat',
//     //     age: 32
//     // }], (error, result) => {
//     //     if (error) {
//     //         return console.log('Unable to insert user!')
//     //     }

//     //     console.log(result);
//     // });

//     // const filter = { title: "Clean"};
//     // const updateDoc = {
//     //   $set: {
//     //     status: "done"
//     //   }
//     // };
//     // const result = db.collection('tasks').updateMany(filter, updateDoc);

//     // console.log(result);


// });