// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// function renderTitle(title) {
//   return `# ${title}`;
// }

// data.title
// data.description
// data.authorName

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  # Table of Contents
  *[Description](#description)
  *[License](#license)
  *[Installation](#installation)
  *[Usage](#usage)
  *[Testing](#testing)
  *[Contributions](#contributions)
  *[Questions](#questions)

  # Description
  ${data.description}

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Testing
  ${data.test}

  # Contributions
  ${data.contributions}

  # Questions
  ${data.contributions}
  
`;
}

module.exports = generateMarkdown;

