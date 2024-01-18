const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        const conn = await mongoose.connect("mongodb+srv://tusharkaira:tusharkaira123@blog-app.h2gepmu.mongodb.net/keywordsearcher")
        console.log(`Connected to MongoDb Database ${conn.connection.host}`)
    }catch(error){
        console.log(`Error in MongoDb ${error}`);
    }
}
module.exports = connectDB;