// ////// ERROR HERE
// const Employee = require("./Employee");
// const Employee = require("./people/employeeCons.js");
const Employee = require("./employeeCons.js");


class Engineer extends Employee {
    ////// Should match Employee class constructor? //////

    // create shell HTML to test console logs?
    constructor (eName, eId, eEmail, github) {
        super (eName, eId, eEmail);
        this.github = github;
    }

    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;


// new Engineer ('Andrew', 'ajconn', 'employee@email.com');