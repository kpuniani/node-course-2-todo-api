const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){

return console.log("Unable to conect to database server");
}
console.log("Connected to mongodb server");

/*db.collection('ToDos').findOneAndUpdate({_id: new ObjectID('59ee627613890c0d78ddf4f4')},
  {
    $set:{
    completed:true,
  }
},
  {
    returnOriginal:false
}).then((result)=>{

console.log(result);
});*/


db.collection('Users').findOneAndUpdate({
_id : new ObjectID('59ee64b3662685186882006b')
},
{
  $set:{
name :"John"
  },
  $inc:
  {
    age :+1,
  }
},
{
  returnOriginal:false
}).then ((result)=>{

console.log(result);

});
db.close();
});
