// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID}= require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5b432ff314e39c5cae987ec8')
  // },{
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginakl:false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5b43149060443343b0abfd7d')
  },{
    $set:{
     name:'Andrew'
   },
   $inc:{
     age:1
   }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });


//  db.close();
});
