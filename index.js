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


async function addEngineer() {
    const result = await inquirer.prompt([
        
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
            name: 'gitHub',
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
    return result;        
};

async function addIntern() {
    const result = await inquirer.prompt([
        
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
        
    ]);
    return result;        
};


async function promptMainMenu() {
    const choice = await inquirer.prompt({
        type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: ['Add an Engineer', 'Add an Intern', 'Finish building my team']
    });

    if (choice.option === "Add an Engineer"){
        addEngineer().then((result) => {
            console.log("engineer result", result);
            const {name, id, email, gitHub} = result;
            const engineer = new Engineer(name, id, email, gitHub);
            employeesArr.push(engineer);
            setTimeout( async () => {
                await promptMainMenu();
            }, 300);
        })
    }
    if (choice.option === "Add an Intern"){
        addIntern().then((result) => {
            console.log("intern result", result);
            const {name, id, email, school} = result;
            const intern = new Intern (name, id, email, school);
            employeesArr.push(intern);
            setTimeout( async () => {
                await promptMainMenu();
            }, 300);
        })
    }
    if (choice.option === "Finish building my team"){
        console.log('final Array', employeesArr);
        const html = generatePage(employeesArr);
        writeFile(html);
        copyFile();
    }
};

promptManager().then( async () => {
    await promptMainMenu();
})

  