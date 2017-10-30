const {ObjectID} = require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User}= require('./../server/models/user');

/*Todo.remove({}).then((todo)=>{
  console.log(todo);
});*/


//Todo.findOneAndRemove()
Todo.findByIdAndRemove('59f7a1c01a9b00941e12605a').then((todo)=>{
console.log(todo);
});
