const mongoose = require('mongoose');

main()
.then(() =>{console.log("Mongo Db Connected");

}) 
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});
const User=mongoose.model('User',userSchema);
User.find()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
// User.insertMany([
//     {name:"sai",email:"krishna.@gmail.com",age:21},
//     {name:"krishna",email:"saikrishna.@gmail.com",age:21},
//     {name:"sai krishna",email:"krishna.reddy@gmail.com",age:21}
// ])
// .then((res)=>{
//     console.log(res);
// })
// const user2=new User({
//     name:"krishna",
//     email:"saikrishna.@gmail.com",
//     age:21
// }); 
// user2.save()
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });
//const Employee=mongoose.model('Employee',userSchema);
