#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
    addCustomer,
    findCustomer,
    removeClient,
    updateClient,
    displayCustomers
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

// add command
program
    .command('add')
    .alias('a')
    .description('Add a client')
    .action(() => {
        prompt(questions).then(answers => {
            addCustomer(answers)
        });
    });

// find command
program
.command('find <name>')
.alias('f')
.description('Find a client')
.action(name => findCustomer(name));

// update command
program
    .command('update <_id>')
    .alias('u')
    .description('Update existing client')
    .action(_id => {
        prompt(questions).then(answers => {
            updateClient(_id, answers);
        });
    });

// delete command
program
.command('remove <_id>')
.alias('r')
.description('Remove existing client')
.action(_id => removeClient(_id));

// display all command
program
.command('list')
.alias('l')
.description('All existing client')
.action(() => displayCustomers());

program.parse(process.argv);