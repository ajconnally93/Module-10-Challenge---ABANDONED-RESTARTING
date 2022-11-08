const Employee = require("./Employee");

class Intern extends Employee {
    constructor(eName, eId, eEmail, eSchool) {
        super (eName, eId, eEmail);
        this.school = eSchool;        
    }

    getSchool() {
        return this.school;
    }
    getRole () {
        return "Intern"
    }
}

module.exports = Intern;