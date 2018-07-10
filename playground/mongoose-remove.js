const {ObjectID} =require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require ('./../server/models/todo');
const {User}=require ('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id:'5b447a9b14e39c5cae98945e'}).then((todo)=>{

});

Todo.findByIdAndRemove('5b447a9b14e39c5cae98945e').then((todo)=>{
  console.log(todo);
});
