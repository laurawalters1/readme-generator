// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const prompt = require('prompt')
const List = require('prompt-list')



// Format function

function formatReadme(data){
    const parsedData = JSON.parse(data)
    return ` 
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
${parsedData.license}
    `
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // Assign what is returned from the formatReadme function when the data paramter is passed in to a variable called formattedData
    const formattedData = formatReadme(data)
    // Pass in formatted data into the append file function
    fs.appendFile(fileName, formattedData, function(err, result){
        
        if(err){
            console.log("There was an error writing the file")
        }
        
    })
   

}

var listObj = new List ({
    name: 'license',
    message: 'Please choose a license for your application',
    choices: [
        'Choice 1',
        'Choice 2',
        'Choice 3'
    ]
})

// TODO: Create an array of questions for user input
inquirer.prompt([{
    name: 'title',
    message: 'Please provide the title of your application'
},
{
    name: 'description',
    message: 'Please provide a description of your application'
},
{
    name: 'install',
    message: 'Please provide instructions on how to install your application'
},
{
    name: 'use',
    message: 'Please provide instructions on how to use your application'
}, 
{
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your application',
    choices: [
        'Choice 1',
        'Choice 2',
        'Choice 3'
    ]
}


]
).then(answers=>{
    fs.writeFile('README.md', `# ${answers.title}`, function(err, result){
        if(err){
            console.log("There was an error")
        }
        writeToFile("README.md", JSON.stringify(answers))
    }

)})




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
