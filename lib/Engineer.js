const Employee = require('./Employee');

class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
        // call parent constructor here:
        super(name, id, email);
        this.gitHub = gitHub;
        this.role = 'Engineer';
        
    }
};

module.exports = Engineer;