var mongoose =require('mongoose');


var Todo=mongoose.model('ToDo',{
text:{
type :String,
required:true,
minlength:1,
trim:true
},
completed:{
  type:Boolean,
  default:false
},
completedAt:{
  type:Number,
  default:null
}
});

/*var newToDo= new Todo({
text: 'Food to be cooked'
});
newToDo.save().then((doc)=>{
 console.log('saved ToDo',doc);
},(error)=>{
  console.log("Not able to save",error)
});
*/
module.exports={
Todo
};
