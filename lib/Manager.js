const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        // call Employee constructor here:
        super(name,id, email);
        
        this.officeNumber = officeNumber;
        this.rol = 'Manager';
        this.icon= 'fa-solid fa-mug-hot';
        this.contactLabel = "Office number:"
    }
};


module.exports = Manager;