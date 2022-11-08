const Employee = require("./Employee");

class Manager extends Employee {
    constructor (eName, eId, eEmail, eOfficeNumber) {
        super (eName, eId, eEmail);
        this.officeNumber = eOfficeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;