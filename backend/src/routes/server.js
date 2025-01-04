const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');//JSON
const mongoose = require('mongoose');//to connect mongoDB schema
const authRoutes = require('./routes/authRoutes');
const app = express();
const PORT = 5000;
const DB_URI = 'mongodb://localhost:27017/spotify%20clone';//mongodb compass
app.use(cors());
app.use(bodyParser.json());//JSON
 
mongoose.connect(DB_URI). then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});

app.use('/', authRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});