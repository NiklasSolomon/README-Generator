
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    //questions go here
    {
        type: 'input',
        message: 'What is the title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the description?',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What is the license?',
        name: 'license',
        choices: ['Apache', 'Boost']
      },
];

// writeToFile function
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
   writeToFile('./output/README.md', generateMarkdown(answers))
  })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });
}


// Function call to initialize app
init();
