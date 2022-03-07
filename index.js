//Node Module for inquirer
const inquirer = require('inquirer');

//Access to page generation
const generatePage = require('./src/page-template');

// utilities to generate the HTML file
const {writeFile, copyFile} = require('./utils/generate-site');

//team classes
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

//Array to store the employee's information
const employeesArr =[];

//Start app by prompting the manager
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
            validate: function (email) {

                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                return true;
                } else {
                console.log("Please enter a valid email!");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Enter the manager's office number? (Required)",
            validate: officeInput => {
                if (isNaN(officeInput)) {
                console.log("Please enter a valid office number!");
                return false;                
                } else {
                    return true;
                }
            }
        }
        //create new manager object and add it to the employee's array
    ]).then(({name, id, email, office})=>{
        const manager = new Manager(name, id, email, office);
        employeesArr.push(manager);
        console.log (manager);
        //console.log(employeesArr);
        
    });
};

//give user options to add employees or finish building the team
const promptEmployee = () =>{
    
    inquirer
       .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
        })
        .then(({option})=>{
            //if add Engineer is selected, then prompt questions for engineers
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
                        validate: function (email) {

                            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                            if (valid) {
                            return true;
                            } else {
                            console.log("Please enter a valid email!");
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

                ])
                //create new engineer object and add it to the employee's array
                .then(({name, id, email, github}) =>{
                    const engineer = new Engineer(name, id, email, github);
                    employeesArr.push(engineer);
                    console.log(engineer);
                    console.log(employeesArr);
                    promptEmployee(employeesArr);
                })

                //if add Intern is selected, then prompt questions for interns
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
                        validate: function (email) {

                            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                            if (valid) {
                            return true;
                            } else {
                            console.log("Please enter a valid email!");
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

                ])
                //create new intern object and add it to the intern's array
                .then(({name, id, email, school}) =>{
                    const intern = new Intern(name, id, email, school);
                    employeesArr.push(intern);
                    //console.log(intern);
                    //console.log(employeesArr);
                    promptEmployee(employeesArr);
                })

             //if 'finish building team' is selected, then return the final array of employees
            } else {
                console.log(employeesArr);
                return employeesArr;                
            }
        });
};


promptManager()
  .then(promptEmployee)  
  .then( finalArr => {
      return generatePage(finalArr);
  })
  
  
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then(copyFileResponse => {
//     console.log(copyFileResponse);
//   })
//   .catch(err => {
//     console.log(err);
//   });