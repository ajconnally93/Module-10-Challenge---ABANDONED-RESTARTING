const inquirer = require('inquirer');

// may not use fs with global scope but including anyway
const fs = require('fs');

// may not use Employee const but including anyway
const Employee = require('./people/employeeCons');

const Engineer = require('./people/engineerCons');
const Intern = require('./people/internCons');
const Manager = require('./people/managerCons')


const confirmAnswerValidator = (input) => {
    ///////////////////////////////////FIX THIS - WON'T VALIDATE OTHER EMPLOYEES, ONLY MANAGER/////////////////////////////////
    // if (input !== 'Manager' && # of managers = 0)
    if (input !== 'Manager') {
       return 'Please select a Manager first to begin building your team';
    }
    return true;
 };

// Only need to ask one separate question for each different employee title. All will have Name, ID, Email asked
function getPeople() {
    const userPrompt = [{
        type: 'input',
        message: 'What is your name?',
        name: 'eName',
    }, {
        type: 'input',
        message: 'What is your ID?',
        name: 'eId'
    }, {
        type: 'input',
        message: 'What is your Email?',
        name: 'eEmail'
    }, {
        type: 'list',
        message: 'What is your job title?',
        choices: ['Engineer', 'Intern', 'Manager'],
        name: 'eTitle',
        validate: confirmAnswerValidator
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
    // borrowed some helper code here to help build HTML. Was struggling a lot.
    function getHtml() {
        let html = "";
        for (j = 0; j < 4; j++) {
            console.log(empArray[j])
            html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col card-header">
                    <h4>${empArray[j].eName}</h4>
                </div>
                <div class="col card-header">
                    <h4>${empArray[j].eTitle}</h4 >
                </div >
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${empArray[j].eId}</li>
                    <li class="list-group-item">Email: ${empArray[j].eEmail}</li>
                    <li class="list-group-item"> ${displayETitle(empArray[j])}</li>
                </ul>
            </div > `;
        }
        return html;
    }

    let html = `< !DOCTYPE html >
                <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                                        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                                        <title>Document</title>
                                        <style>
                                            .row {
                                                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                margin-top: 20px;
                margin-bottom: 20px;
            }
            .card {
                                                padding: 15px;
                border-radius: 6px;
                background-color: white;
                color: lightskyblue;
                margin: 15px;
            }
            .text {
                                                padding: 15px;
                border-radius: 6px;
                background-color: lightskyblue;
                color: black;
                margin: 15px;
            }
            .col {
                                                flex: 1;
                text-align: center;
            }
        </style>
    </head>
                                    <body>
                                        <nav class="navbar navbar-dark bg-dark justify-content-center align-items-center">
                                            <span class="navbar-brand mb-0 h1">
                                                <h1>My Team</h1>
                                            </span>
                                        </nav>
                                        <div class="row">
                                            ${getHtml()}
                                        </div>
                                    </body>
    
    </html>
    `;

    console.log(html);
    const fs = require('fs');
    fs.writeFile('newFile.html', html, function (err) {
        if (err) throw err;
        console.log('File was created successfully.');
    });
}

writeHtml()