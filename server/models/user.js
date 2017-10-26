var mongoose =require('mongoose');

var User=mongoose.model('User',{
Email:{
type :String,
required:true,
minlength:1,
trim:true
}
});

/*var newUser= new User({
Email:'    hello@gmail.com     '
});

newUser.save().then((result)=>{
console.log("Saved", result);

}),(err)=>{

  console.log("Not able to save",err);
};*/
module.exports={
User
};
