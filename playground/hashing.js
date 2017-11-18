const {SHA256}= require('crypto-js');
const jwt =require('jsonwebtoken')

var data ={

  id:10
};


var token=jwt.sign(data,'abc123');

console.log(token);

var decoded = jwt.verify(token ,'abc123');
console.log('decoded', decoded);

/*var message ="I am a user";

var hash = SHA256(message).toString();
console.log(`message:${message}`);
console.log(`hash:${hash}`);

var data={
id:4

};

var token={
data,
hash:SHA256(JSON.stringify(data)+'somesecret').toString()
}
token.data.id=5;

var resultHash=SHA256(JSON.stringify(token.data.id)+'somesecret').toString();
console.log(resultHash);
if(token.hash===resultHash){

  console.log("they are same");
}else{

  console.log("They are not");
}
*/
