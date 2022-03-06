const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                return true;
                } else {
                console.log("Please enter the manager's name!");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's employee id? (Required)",
            validate: idInput => {
                if (idInput) {
                return true;
                } else {
                console.log("Please enter the manager's employee id!");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                return true;
                } else {
                console.log("Please enter the manager's email!");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Enter the manager's office number? (Required)",
            validate: officeInput => {
                if (officeInput) {
                return true;
                } else {
                console.log("Please enter the manager's office number!");
                return false;
                }
            }
        }
    ]);
};

const promptEmployee = () =>{
    //Remember to Add an Array for Employees, if there is no Array at the begining, create it
    inquirer
       .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
        })
        .then(({option})=>{
            if(option === 'Add an Engineer'){
                inquirer
                 .prompt([
                     {
                        type: 'input',
                        name: 'name',
                        message: "What is the engineer's name? (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                            return true;
                            } else {
                            console.log("Please enter the engineers's name!");
                            return false;
                            }
                        }

                     },

                     {
                        type: 'input',
                        name: 'id',
                        message: "Enter the engineer's employee id? (Required)",
                        validate: idInput => {
                            if (idInput) {
                            return true;
                            } else {
                            console.log("Please enter the engineer's employee id!");
                            return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "Enter the engineer's email? (Required)",
                        validate: emailInput => {
                            if (emailInput) {
                            return true;
                            } else {
                            console.log("Please enter the engineer's email!");
                            return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: "Enter the engineer's GitHub username? (Required)",
                        validate: gitHubInput => {
                            if (gitHubInput) {
                            return true;
                            } else {
                            console.log("Please enter the engineer's GitHub username!");
                            return false;
                            }
                        }
                    }

                ]);

            } else if (option === 'Add an Intern'){
                inquirer
                 .prompt([
                     {
                        type: 'input',
                        name: 'name',
                        message: "What is the intern's name? (Required)",
                        validate: nameInput => {
                            if (nameInput) {
                            return true;
                            } else {
                            console.log("Please enter the intern's name!");
                            return false;
                            }
                        }

                     },

                     {
                        type: 'input',
                        name: 'id',
                        message: "Enter the intern's employee id? (Required)",
                        validate: idInput => {
                            if (idInput) {
                            return true;
                            } else {
                            console.log("Please enter the intern's employee id!");
                            return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "Enter the intern's email? (Required)",
                        validate: emailInput => {
                            if (emailInput) {
                            return true;
                            } else {
                            console.log("Please enter the intern's email!");
                            return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "Enter the intern's school name? (Required)",
                        validate: schoolInput => {
                            if (schoolInput) {
                            return true;
                            } else {
                            console.log("Please enter the intern's school name!");
                            return false;
                            }
                        }
                    }

                ]);

            } else {
                return employeeData;
            }
        })
}


promptManager().then( managerInfo => {    
       console.log(managerInfo)
    });

// writeFile(generatePage())
//   .then(res => {
//     console.log(res);
//     return copyFile();
//   })
//   .then(res => {
//     console.log(res);
//     console.log('All Done!');
//   })
//   .catch(err => {
//     console.log(err);
//   });