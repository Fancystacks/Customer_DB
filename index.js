const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
// connect to the database
const db = mongoose.connect('mongodb://localhost:27017/customer_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const Customer = require('./models/customer');

// add a customer to db
const addCustomer = (customer) => {
    Customer.create(customer).then(customer => {
        console.info('New customer added');
        mongoose.connection.close();
    })
}

// find a customer
const findCustomer = (name) => {
    // specify to make it not case sensitive 
    const search = RegExp(name, 'i');
    Customer.find({$or: [{firstName: search}, {lastName: search}]})
    .then(customer => {
        console.info(customer);
        console.info(`${customer.length} matches`);
        mongoose.connection.close();
    })
}

// updating a customer
const updateClient = (_id, customer) => {
    Customer.updateOne({_id}, customer)
    .then(customer => {
        console.info('Customer has been updated');
        mongoose.connection.close();
    });
}

// deleting a customer
const removeClient = (_id) => {
    Customer.deleteOne({ _id })
    .then(customer => {
        console.info('Customer has been removed');
        mongoose.connection.close();
    });
}

// display customers
const displayCustomers = () => {
    Customer.find()
    .then(customers => {
        console.info(customers);
        console.info(`${customers.length} matches found`);
        mongoose.connection.close();
    })
}

module.exports = {
    addCustomer,
    findCustomer,
    updateClient,
    removeClient,
    displayCustomers
}