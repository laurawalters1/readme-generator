// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

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

License.prototype.returnUrl = () => {
  return this.descr;
};
// Instantiating license objects

const apache2 = new License(
  "Apache License 2.0",
  "This application is covered under Apache 2.0 License",
  "https://opensource.org/licenses/Apache-2.0",
  "https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
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

const none = new License("", "", "", "");

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

// Filter through license objects

function filterLicense(answer) {
  return licenses.find(function (license) {
    return license.name === answer;
  });
}

// Format function

function formatReadme(data) {
  const parsedData = JSON.parse(data);
  const licenseJsonObj = JSON.stringify(filterLicense(parsedData.license));
  const licenseParsedObj = JSON.parse(licenseJsonObj);
  return ` 
  <a href="${licenseParsedObj.url}"><img src="${licenseParsedObj.badgeSrc}"></a>
## Table of contents
1. Description
2. How to install
3. How to use
4. Licensing

### Description:
${parsedData.description}

### Installation:
${parsedData.install}

### How to use:
${parsedData.use}

### Licensing:
${licenseParsedObj.descr}
    `;
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

var listObj = new List({
  name: "license",
  message: "Please choose a license for your application",
  choices: ["Choice 1", "Choice 2", "Choice 3"],
});

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
      type: "list",
      name: "license",
      message: "Please choose a license for your application",
      choices: licenses,
    },
  ])
  .then((answers) => {
    fs.writeFile("README.md", `# ${answers.title}`, function (err, result) {
      if (err) {
        console.log("There was an error");
      }
      console.log(filterLicense(answers.license));
      writeToFile("README.md", JSON.stringify(answers));
    });
  });

const questions = [
  "Please provide the title of your application",
  "Please provide a description of your application",
  "Please provide a table of contents",
  "Please provide instructions on how to install your application",
  "Please provide instructions on how to use your application",
  "Please choose a license for your application",
];

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
