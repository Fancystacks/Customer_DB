const program = require('commander');
const {
    addCustomer,
    findCustomer
} = require('./index');

program
.version('1.0.0')
.description('Customer Management Software')

program.command('add <firstname> <lastname> <phone> <email> ')
.alias('a')
.description('Add a client')
.action((firstname, lastname, phone, email) => {
    addCustomer({firstname, lastname, phone, email})
});

program
.command('find <name>')
.alias('f')
.description('Find a client')
.action(name => findCustomer(name));



program.parse(process.argv);