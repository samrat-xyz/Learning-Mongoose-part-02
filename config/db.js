const mongoose = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('mongoose connect to database successfully')
    } catch (error) {
        console.error("Error",error)
    }
}

module.exports=connectDB