const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';


const callback = (error, result) => {
  if (error) {
    return console.log('unable to insert')
  }
  console.log(result.ops)
};

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect')
  }

  console.log('connected');
  const db = client.db(databaseName);

  // db.collection('users').insertOne({
  //   name: 'Tõnis',
  //   age: 25
  // }, callback)

  // const docs = [{name: 'Jen', age: 28}, {name: 'Gunther', age: 43}];
  // db.collection('users').insertMany(docs, callback)
  insertTasks(db)
});

const insertTasks = (db) => {
  const docs = [{description: 'Hello', completed: true},
    {description: 'World', completed: false},
    {description: 'Long way round', completed: false}
    ];
  db.collection('tasks').insertMany(docs, callback)
}
