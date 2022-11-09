const inquirer = require('inquirer');

// may not use fs with global scope but including anyway
const fs = require('fs');

// may not use Employee const but including anyway
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

async function writeHtml() {
    let empArray = [];
    for (i = 0; i < 4; i++) {
        const promise = new Promise((resolve, reject) => {
            getPeople()
                .then(function ({ eName, eId, eEmail, eTitle }) {

                    if (eTitle == 'Manager') {
                        getManager().then(function ({ officeNumber }) {
                            this.employee = new Manager(eName, eId, eEmail, officeNumber, eTitle);
                            empArray.push(employee);
                            resolve('done');
                        });

                    } else if (eTitle == 'Engineer') {
                        getEngineer().then(function ({ github }) {
                            this.employee = new Engineer(eName, eId, eEmail, github, eTitle);
                            empArray.push(employee);
                            resolve('done');
                        });

                    } else if (eTitle == 'Intern') {
                        getIntern().then(function ({ school }) {
                            this.employee = new Intern(eName, eId, eEmail, school, eTitle);
                            empArray.push(employee);
                            resolve('done');
                        });
                    }

                }).catch(function (err) {
                    console.log("ERROR!");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }

    function displayETitle(employee) {
        if (employee.eTitle == 'Manager') {
            return `office number: ${employee.officeNumber}`;
        }
        if (employee.eTitle == 'Intern') {
            return `school: ${employee.school}`;
        }
        if (employee.eTitle == 'Engineer') {
            return `gitHub: ${employee.github}`;
        }}

    // start writing HTML here with another function
}