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
            validate: idInput => {
                if (idInput) {
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
            validate: idInput => {
                if (idInput) {
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
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'option',
            choices: ['Add an Engineer ', 'Add an Intern ', 'Finish building my team']
        }
    ])
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