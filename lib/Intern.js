const Employee = require('./Employee');

class Intern extends Employee{
    constructor(name, id, email, school) {
        // call employee constructor here:
        super(name,id, email);

        this.school = school;
        this.rol = 'Intern';
        this.icon = 'fa-solid fa-user-graduate';
        this.contactLabel = "School:";
    }
}

module.exports = Intern;