const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){

return console.log("Unable to conect to database server");
}
console.log("Connected to mongodb server");

db.collection('ToDos').find().toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2))},
(err)=>{
 console.log("Not able to find",err);
});
/*db.collection('ToDos').find().count().then((count)=>{
console.log(`count is:'${count}`)},
(err)=>{
 console.log("Not able to find",err);
});*/
/*db.collection('Users').find().toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2))},
(err)=>{
 console.log("Not able to find",err);
});*/
db.close();
});
