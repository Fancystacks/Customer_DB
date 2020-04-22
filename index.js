const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// connect to the database
const db = mongoose.connect('mongodb://localhost:27017/customer_db', {
    useMongoClient: true
});

const Customer = require('./models/customer');

// add a customer to db
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New customer added');
        db.close();
    })
}

// find a customer
const findCustomer = (name) => {
    // specify to make it not case sensitive 
    const search = RegExp(name, 'i');
    Customer.find({$or: [{firstName: search}, {lastName: search}]})
    .then(customer => {
        console.infp(customer);
        console.info(`${customer.length} matches`);
        db.close();
    })
}