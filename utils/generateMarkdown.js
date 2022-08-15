// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Table of Contents
  [Description](#description)  
  [License](#license)  
  [Installation](#installation)  
  [Usage](#usage)  
  [Testing](#testing)  
  [Contributions](#contributions)  
  [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under ${data.license}

  ## Testing
  ${data.test}

  ## Contributions
  ${data.contributions}

  ## Questions
  Any questions about the application can be directed to my email at ${data.email} or at my Github at https://github.com/${data.github} .
  
`;
}

module.exports = generateMarkdown;

