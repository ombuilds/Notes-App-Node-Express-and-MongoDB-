const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

console.log('DNS Servers:', dns.getServers());

const mongoose = require('mongoose');
require("dotenv").config();



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports=connectDB;

