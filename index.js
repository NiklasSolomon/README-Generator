
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    //questions go here
    {
        type: 'input',
        message: 'What is the title of the application?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the description of the application?',
        name: 'description',
      },
      {
        type: 'list',
        message: 'What is the license that is being used?',
        name: 'license',
        choices: ['Apache', 'Boost']
      },
      {
        type: 'input',
        message: 'How will your application be installed?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How is the application used?',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How will the application be tested?',
        name: 'test',
      },
      {
        type: 'input',
        message: 'What contribution guidelines does the user need to know?',
        name: 'contributions',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
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
}

// .catch(error => {
//   if (error.isTtyError) {
//     console.log ("Prompt couldn't be rendered in the current environment")
//   } else {
//     console.log("Something else went wrong")
//   }
// });



// Function call to initialize app
init();
