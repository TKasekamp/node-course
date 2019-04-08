const {MongoClient, ObjectID} = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id)

const callback = (error, result) => {
  if (error) {
    return console.log('unable to insert')
  }
  console.log(result)
};

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
  if (error) {
    return console.log('Unable to connect')
  }

  console.log('connected');
  const db = client.db(databaseName);

  // db.collection('users').insertOne({
  //   _id: id,
  //   name: 'Tõnis',
  //   age: 25
  // }, callback)

  // const docs = [{name: 'Jen', age: 28}, {name: 'Gunther', age: 43}];
  // db.collection('users').insertMany(docs, callback)
  // insertTasks(db)
  // lastTask(db)
  // notCompleted(db)
  completeAll(db)
});

const insertTasks = (db) => {
  const docs = [{description: 'Hello', completed: true},
    {description: 'World', completed: false},
    {description: 'Long way round', completed: false}
  ];
  db.collection('tasks').insertMany(docs, callback)
};

const lastTask = (db) => {
  db.collection('tasks').findOne({_id: new ObjectID("5cab8452a57586227e2c1c95")}, callback)
}

const notCompleted = (db) => {
  db.collection('tasks').find({completed: false}).toArray(callback)
}

const completeAll = (db) => {
  db.collection('tasks').updateMany({completed: false}, {$set: {completed: true}}).then(
    result => console.log(result.modifiedCount)
  )
}
