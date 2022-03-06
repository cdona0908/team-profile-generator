const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, rol, officeNumber) {
        // call parent constructor here:
        super(name,id, email, rol);
        this.officeNumber = officeNumber;
        this.rol = 'Manager';
        this.icon= 'fa-solid fa-mug-hot';
    }
}

module.exports = Manager;