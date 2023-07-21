const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/link-shortner'; 

const connectToMongo = () => {
   mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

   mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB');
   });

   mongoose.connection.on('error', (err) => {
      console.error('Error connecting to MongoDB:', err);
   });
}

module.exports = connectToMongo;
