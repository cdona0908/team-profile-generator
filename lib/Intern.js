const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, rol, school='') {
        // call parent constructor here:
        super(name,id, email, rol);
        this.school = school;
        this.rol = 'Intern';
        this.icon = 'fa-solid fa-user-graduate';
    }
}

module.exports = Intern;