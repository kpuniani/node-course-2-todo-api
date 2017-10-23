const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){

return console.log("Unable to conect to database server");
}

/*db.collection('ToDos').insertOne({
text:'To eat',
completed:false

},(err,result)=>{
  if(err){
return console.log("Unable to insert todo", err);
}
console.log(JSON.stringify(result.ops,undefined,2));
})*/
console.log("Connected to mongodb server");


db.collection('Users').insertOne({
 name:'Mike',
 age:24,
 location:'Philadelphia'
},(err,result)=>{
if(err){
  return console.log("Unable to insert Users", err);
}
console.log(JSON.stringify(result.ops,undefined,2));
})
db.close();
});
