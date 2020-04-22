const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// connect to the database
const db = mongoose.connect('mongodb://localhost:27017/customer_db', {
    useMongoClient: true
});
