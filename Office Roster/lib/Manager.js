const Employee = require('../lib/employee')

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber; 
    }


officeNumber() {
    return this.officeNumber
}

getRole() {
    return 'Manager'
}

}
module.exports = Manager 