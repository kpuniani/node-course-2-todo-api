const {ObjectID} = require('mongodb');

const {mongoose}=require('./../server/db/mongoose');
const {Todo}= require('./../server/models/todo');
const {User}= require('./../server/models/user');
var id ='59ee64b3662685186882006b';


/*if(!ObjectID.isValid(id)){

  console.log("Id not found");
}
/*Todo.find({
_id :id
}).then((todos)=>{
  console.log("todo", todos);
});

Todo.findOne({
_id :id
}).then((todo)=>{
  console.log("todo", todo);
});

Todo.findById({
_id :id
}).then((todo)=>{
  if(!todo){
    return console.log("Id not found");
  }
  console.log("todo", todo);
}).catch((e)=>{
console.log(e);
});*/



User.findById('59ee64b3662685186882006b').then((user)=>{
  if(!user){
    return console.log("Unable to find user");
  }
  console.log("user", user);
}).catch((e)=>{
console.log(e);
});
