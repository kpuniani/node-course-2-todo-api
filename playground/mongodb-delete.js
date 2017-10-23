const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){

return console.log("Unable to conect to database server");
}
console.log("Connected to mongodb server");


/*db.collection('Users').deleteMany().then((result)=>{
console.log(result);
});*/
/*db.collection('ToDos').deleteOne({_id : new ObjectID('59ee650756fe3f14dc6f3ccc')}).then((result)=>{
console.log(result);
});*/
db.collection('Users').findOneAndDelete({ _id : new ObjectID("59ee6416bf11b31ee028fcc6")}).then((result)=>{
console.log(JSON.stringify(result,undefined,2));
});



db.close();
});
