class Employee {

    constructor (eName, eId, eEmail) {
        this.name = eName;
        this.id = eId;
        this.email = eEmail;
    }

    getName () {
        return this.name;
    }
    getId () {
        return this.id;
    }
    getEmail () {
        return this.email;
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;


// new Employee ('Andrew', 'ajconn', 'employee@email.com');