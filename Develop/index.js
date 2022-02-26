// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const prompt = require("prompt");
const List = require("prompt-list");

// License constructor function

function License(name, descr, url, badgeSrc) {
  this.name = name;
  this.descr = descr;
  this.url = url;
  this.badgeSrc = badgeSrc;
}

// Instantiating license objects

const apache2 = new License(
  "Apache License 2.0",
  "This application is covered under Apache 2.0 License",
  "https://opensource.org/licenses/Apache-2.0",
  "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
);

const gnuV3 = new License(
  "GNU General Public License v3.0",
  "This application is covered under the GNU General Public License v3.0",
  "https://www.gnu.org/licenses/gpl-3.0",
  "https://img.shields.io/badge/License-GPLv3-blue.svg"
);

const mitLicense = new License(
  "MIT License",
  "This application is covered under the MIT License",
  "https://opensource.org/licenses/MIT",
  "https://img.shields.io/badge/License-MIT-yellow.svg"
);

const bsd2Clause = new License(
  "BSD 2-Clause 'Simplified' License",
  "This application is covered by the BSD 2-clause 'Simplified' Licenese",
  "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
  "https://opensource.org/licenses/BSD-2-Clause"
);

const bsd3Clause = new License(
  "BSD 3-Clause 'New' or 'Revised' License",
  "This application is covered by the BSD 3-Clause 'New' or 'Revised' License",
  "https://opensource.org/licenses/BSD-3-Clause",
  "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg"
);

const boostSoftwareLicense = new License(
  "Boost Software License 1.0",
  "This application is covered by the Boost Software License 1.0",
  "https://www.boost.org/LICENSE_1_0.txt",
  "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg"
);

const creativeCommZero = new License(
  "Creative Commons Zero v1.0 Universal",
  "This application is covered by the Creative Commons Zero v1.0 License",
  "http://creativecommons.org/publicdomain/zero/1.0/",
  "https://licensebuttons.net/l/zero/1.0/80x15.png"
);

const eclipsePubLicense = new License(
  "Eclipse Public License 2.0",
  "This application is covered by the Eclipse Publice License 2.0",
  "https://opensource.org/licenses/EPL-1.0",
  "https://img.shields.io/badge/License-EPL_1.0-red.svg"
);

const gnuAffero = new License(
  "GNU Affero General Public License v3.0",
  "This application is covered by GNU Affero General Public License v3.0",
  "https://www.gnu.org/licenses/agpl-3.0",
  "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
);

const gnuGeneral = new License(
  "GNU General Public License v2.0",
  "This application is covered by GNU General Public License v2.0",
  "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  "https://img.shields.io/badge/License-GPL_v2-blue.svg"
);

const gnuLesserGeneral = new License(
  "GNU Lesser General Public License v2.1",
  "This application is covered by GNU Lesser General Public License v3.0",
  "https://www.gnu.org/licenses/lgpl-3.0",
  "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
);

const mozillaPub = new License(
  "Mozilla Public License 2.0",
  "This application is covered by Mozilla Public License 2.0",
  "https://opensource.org/licenses/MPL-2.0",
  "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
);

const theUniLicense = new License(
  "The Unilicense",
  "This application is covered by the Unilicense",
  "http://unlicense.org/",
  "https://img.shields.io/badge/license-Unlicense-blue.svg"
);

const none = new License(
  "None",
  "This application is not covered by a license",
  "",
  ""
);

// Declaring licenses array

const licenses = [
  apache2,
  gnuV3,
  mitLicense,
  bsd2Clause,
  bsd3Clause,
  boostSoftwareLicense,
  creativeCommZero,
  eclipsePubLicense,
  gnuAffero,
  gnuGeneral,
  gnuLesserGeneral,
  mozillaPub,
  theUniLicense,
  none,
];

// Filter through license objects to return the one that matches the user choice

function filterLicense(answer) {
  return licenses.find(function (license) {
    return license.name === answer;
  });
}

// Format function - Takes user answers object as a parameter

function formatReadme(data) {
  // Parsing the stringified data so that it can be used as an object
  const parsedData = JSON.parse(data);
  // Stringify the object returned by the filterLicense function
  const licenseJsonObj = JSON.stringify(filterLicense(parsedData.license));
  // Parse the string from above so it can be used as an object
  const licenseParsedObj = JSON.parse(licenseJsonObj);
  // Formatting the data
  return ` 
  <a href="${licenseParsedObj.url}"><img src="${licenseParsedObj.badgeSrc}"></a>
## Table of contents
[1) description](#description)

[2) How to install](#installation)

[3) How to use](#how-to-use)

[4) Contribution guidelines](#contribution-guidelines)

[5) Testing guidelines](#testing-guidelines)

[6) Licensing](#licensing)

[7) Questions](#questions)

### Description:
${parsedData.description}

### Installation:
${parsedData.install}

### How to use:
${parsedData.use}

### Contribution guidelines:
${parsedData.contribution}

### Testing Guidelines:
${parsedData.testing}

### Licensing:
${licenseParsedObj.descr}

### Questions:
To view my other deployed projects, take a look at <a href="https://github.com/${parsedData.github}">My Github profile</a>
Or for any questions regarding this, or any of my other deployed projects, please contact me via <a href="mailto:${parsedData.email}">Email</a>    `;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  // Assign what is returned from the formatReadme function when the data paramter is passed in to a variable called formattedData
  const formattedData = formatReadme(data);
  // Pass in formatted data into the append file function
  fs.appendFile(fileName, formattedData, function (err, result) {
    if (err) {
      console.log("There was an error writing the file");
    }
  });
}

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      name: "title",
      message: "Please provide the title of your application",
    },
    {
      name: "description",
      message: "Please provide a description of your application",
    },
    {
      name: "install",
      message: "Please provide instructions on how to install your application",
    },
    {
      name: "use",
      message: "Please provide instructions on how to use your application",
    },
    {
      name: "contribution",
      message: "Please provide contribution guidelines for your application",
    },
    {
      name: "testing",
      message: "Please provide testing guidelines for your application",
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license for your application",
      choices: licenses,
    },
    {
      name: "github",
      message: "Please provide your github username",
    },
    {
      name: "email",
      message:
        "Please provide the email address with which you would like users to be able to reach out to you",
    },
  ])
  .then((answers) => {
    fs.writeFile("README.md", `# ${answers.title}`, function (err, result) {
      if (err) {
        console.log("There was an error");
      }

      // Stringify answers object so that it can be passed into writeToFile
      writeToFile("README.md", JSON.stringify(answers));
    });
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
