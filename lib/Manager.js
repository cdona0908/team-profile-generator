const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee{
    constructor(name, id, email, rol, officeNumber) {
        // call parent constructor here:
        super(name,id, email, rol);
        this.officeNumber = officeNumber;
        this.rol = 'Manager';
        this.icon= 'fa-solid fa-mug-hot';
        this.contactLabel = "Office number:"
    }

    // promptManager(){
    //     return inquirer.prompt([
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: "What is the team manager's name? (Required)",
    //             validate: nameInput => {
    //                 if (nameInput) {
    //                 return true;
    //                 } else {
    //                 console.log("Please enter the manager's name!");
    //                 return false;
    //                 }
    //             }
    //         },
    //         {
    //             type: 'input',
    //             name: 'id',
    //             message: "Enter the manager's employee id? (Required)",
    //             validate: idInput => {
    //                 if (idInput) {
    //                 return true;
    //                 } else {
    //                 console.log("Please enter the manager's employee id!");
    //                 return false;
    //                 }
    //             }
    //         },
    //         {
    //             type: 'input',
    //             name: 'email',
    //             message: "Enter the manager's email? (Required)",
    //             validate: idInput => {
    //                 if (idInput) {
    //                 return true;
    //                 } else {
    //                 console.log("Please enter the manager's email!");
    //                 return false;
    //                 }
    //             }
    //         },
    //         {
    //             type: 'input',
    //             name: 'office',
    //             message: "Enter the manager's office number? (Required)",
    //             validate: idInput => {
    //                 if (idInput) {
    //                 return true;
    //                 } else {
    //                 console.log("Please enter the manager's office number!");
    //                 return false;
    //                 }
    //             }
    //         }
    //     ])
    // }


};

// promptManager().then( managerInfo => {    
//     console.log(managerInfo)
// });
module.exports = Manager;