// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
     if (license === 'MIT') {
       return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`
     } else if (license === 'APACHE 2.0') {
       return `![GitHub license](https://img.shields.io/badge/license-APACHE%202.0-blue.svg)`
     } else if (license === 'GPL 3.0') {
       return `![GitHub license](https://img.shields.io/badge/license-GPL%203.0-blue.svg)`
     } else if (license === 'BSD 3') {
       return `![GitHub license](https://img.shields.io/badge/license-BSD%203-blue.svg)`
     } else {
       return ''
     };
  
   /*  switch (license) {
      case 'MIT':
        return `![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)`
        break;
      case 'APACHE 2.0':
        return `![GitHub license](https://img.shields.io/badge/license-APACHE%202.0-blue.svg)`
        break;
      case 'GPL 3.0':
        return `![GitHub license](https://img.shields.io/badge/license-GPL%203.0-blue.svg)`
        break;
      case 'BSD 3':
        return `![GitHub license](https://img.shields.io/badge/license-BSD%203-blue.svg)`
        break;
      default:
        return ''
    } */
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  
    switch (license) {
      case 'MIT':
        return `[MIT](https://opensource.org/licenses/MIT)`
        break;
      case 'APACHE 2.0':
        return `[APACHE 2.0](https://opensource.org/licenses/Apache-2.0)`
        break;
      case 'GPL 3.0':
        return `[GPL 3.0](https://opensource.org/licenses/GPL-3.0)`
        break;
      case 'BSD 3':
        return `[BSD 3](https://opensource.org/licenses/BSD-3-Clause)`
        break;
      default:
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
      if (license === 'None') {
        return ''
      } else {
        return `## License
        This project is licensed under the ${renderLicenseLink(license)} license.`
      }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  ${data.tableOfContents}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  ${data.questions}

`;
}

module.exports = generateMarkdown;
