const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore');

//check connection
mongoose.connection.on('connected', () => {
    console.log('Connected to dataBase');
});
mongoose.connection.on('error', (err) => {
    console.error('Connection failed :', err);
});

module.exports = mongoose;