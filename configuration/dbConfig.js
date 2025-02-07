const mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables

const dbURL = process.env.MONG_URL;
console.log(dbURL,'dbbbb')

console.log(`MongoDB connection string: ${dbURL}`);

mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error(`MongoDB connection error: ${err}`));

module.exports = mongoose;
