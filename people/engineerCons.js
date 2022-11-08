const Employee = require("./Employee");


class Engineer extends Employee {
    ////// Should match Employee class constructor? //////

    // create shell HTML to test console logs?
    constructor (eName, eId, eEmail, eGithub) {
        super (eName, eId, eEmail);
        this.github = eGithub;
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