const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        // call Employee constructor here:
        super(name,id, email);
        
        this.officeNumber = officeNumber;
        this.role = 'Manager';
        
    }
};


module.exports = Manager;