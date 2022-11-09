const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./people/employeeCons');
const Engineer = require('./people/engineerCons');
const Intern = require('./people/internCons');
const Manager = require('./people/managerCons')


// Only need to ask one separate question for each different employee title. All will have Name, ID, Email asked

function getPeople() {
    const userPrompt = [{
        type: 'input',
        message: 'What is your name?',
        name: 'eName'
    }, {
        type: 'input',
        message: 'What is your ID?',
        name: 'eId'
    }, {
        type: 'input',
        message: 'What is your Email?',
        name: 'eEmail'
    }, {
        type: 'input',
        message: 'What is your job title?',
        choices: ['Engineer', 'Intern', 'Manager'],
        name: 'eTitle'
    }];
    return inquirer
        .prompt(userPrompt);
}

function getManager() {
    const userPrompt = [{
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber'
    }];
    return inquirer
        .prompt(userPrompt);
}

function getEngineer() {
    const userPrompt = [{
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    }];
    return inquirer
        .prompt(userPrompt);
}

function getIntern() {
    const userPrompt = [{
        type: 'input',
        message: 'What school are you attending?',
        name: 'school'
    }];
    return inquirer
        .prompt(userPrompt);
}