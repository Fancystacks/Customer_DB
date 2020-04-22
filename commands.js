const program = require('commander');
const {
    addCustomer,
    findCustomer
} = require('./index');

program
.version('1.0.0')
.description('Customer Management Software')

program.command('add <firstName> <lastName> <phone> <email> ')
.alias('a')
.description('Add a client')
.action((firstName, lastName, phone, email) => {
    addCustomer({firstName, lastName, phone, email})
});

program
.command('find <name>')
.alias('f')
.description('Find a client')
.action(name => findCustomer(name));



program.parse(process.argv);