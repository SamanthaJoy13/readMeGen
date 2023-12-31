// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const directory = './dist';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project. (Required)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
     {
            type: 'checkbox',
            name: 'tableOfContents',
            message: 'Select the sections to include in the Table of Contents (Use spacebar to select)',
            choices: [
                {
                    name: 'Installation',
                    value: 'installation'
                },
                {
                    name: 'Usage',
                    value: 'usage'
                },
                {
                    name: 'Contributing',
                    value: 'contributing'
                },
                {
                    name: 'Tests',
                    value: 'tests'
                },
                {
                    name: 'Questions',
                    value: 'questions'
                },
                {
                    name: 'License',
                    value: 'license'
                }
            ]
        },  
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for your project. (Required)',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions for your project. (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter usage instructions for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines for your project. (Required)',
        validate: contributingInput => {
            if (contributingInput) {
                return true;
            } else {
                console.log('Please enter contribution guidelines for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for your project. (Required)',
        validate: testsInput => {
            if (testsInput) {
                return true;
            } else {
                console.log('Please enter test instructions for your project!');
                return false;
            }
        }   
    },  
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project. (Required)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please choose a license for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Provide instructions for users to reach you with additional questions. (Required)',
        validate: questionsInput => {
            if (questionsInput) {
                return true;
            } else {
                console.log('Please enter instructions for users to reach you with additional questions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username. (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address. (Required)',
        validate: emailInput => {
            // Regular expression pattern to validate email format
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailInput && emailPattern.test(emailInput)) {
                return true;
            } else {
                console.log('Please enter a valid email address!');
                return false;
            }
        }
    }      
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
    }

    fs.writeFile(fileName, data, err => {
        if (err) throw err;
        console.log('README complete! Check out README.md to see the output!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        return generateMarkdown(data);
    })
    .then(markdown => {
        return writeToFile('./dist/README.md', markdown);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
