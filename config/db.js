const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

        console.log('MongoDB Connected...');
    } catch (err){
        console.log(err.message);
        // EXIT PROCESS WITH FAILURE
        process.exit(1);
    }
}

module.exports = connectDB;
