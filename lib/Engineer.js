const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, rol, gitHub) {
        // call parent constructor here:
        super(name,id, email, rol);
        this.gitHub = gitHub;
        this.rol = 'Engineer';
        this.icon = 'fa-solid fa-glasses';
        this.contactLabel = "GitHub:"
    }
}

module.exports = Engineer;