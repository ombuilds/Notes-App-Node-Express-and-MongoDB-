const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

console.log('DNS Servers:', dns.getServers());

const mongoose = require('mongoose');


async function connectDB(){
    
    await mongoose.connect("mongodb+srv://new_user:2WFZHxn6ZIh6pm3O@cluster0.uttsfm5.mongodb.net/halley")

    console.log("connected to DB")
}

module.exports=connectDB;

