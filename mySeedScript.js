const MongoClient = require("mongodb").MongoClient;

async function seedDB() {
    const connectionURL = 'mongodb://127.0.0.1:27017';
    const client = new MongoClient(connectionURL, { useNewUrlParser: true });

    try {
        await client.connect();
        console.log("Connected correctly to server");

        const collection = client.db("to-do-manager").collection("tasks");

        collection.drop();

        const items = [
            {
                title: "Wash the dishes",
                isDone: true
            },
            {
                title: "Buy groceries",
                isDone: false
            },
            {
                title: "Paint the walls",
                isDone: false
            },
            {
                title: "Pack boxes",
                isDone: false
            },
            {
                title: "Hang the shelves",
                isDone: true
            }
        ]

        collection.insertMany(items);

        console.log("Database seeded! :)");
    } catch (err) {
        console.log(err.stack);
    }
}

seedDB();
// const filter = { title: "Clean"};
// const updateDoc = {
//   $set: {
//     status: "done"
//   }
// };
// const result = db.collection('tasks').updateMany(filter, updateDoc);

// console.log(result);