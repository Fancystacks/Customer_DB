const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer
} = require('./index');

// customer question inquirer prompt 
const questions = [
    {
        type: 'input',
        name: 'firstName',
        message: 'Customer first name'
    },
    {
        type: 'input',
        name: 'lastName',
        message: 'Customer last name'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Customer phone number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Customer email address'
    }
]

program
.version('1.0.0')
.description('Customer Management Software')

// program.command('add <firstName> <lastName> <phone> <email> ')
// .alias('a')
// .description('Add a client')
// .action((firstName, lastName, phone, email) => {
//     addCustomer({firstName, lastName, phone, email})
// });

program
    .command('add')
    .alias('a')
    .description('Add a client')
    .action(() => {
        prompt(questions).then(answers => {
            addCustomer(answers)
        });
    });

program
.command('find <name>')
.alias('f')
.description('Find a client')
.action(name => findCustomer(name));



program.parse(process.argv);