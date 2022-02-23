// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const prompt = require('prompt')

// TODO: Create an array of questions for user input
inquirer.prompt([{
    name: 'title',
    message: 'Please provide the title of your application'
}])


const questions = [
"Please provide the title of your application",
"Please provide a description of your application",
"Please provide a table of contents",
"Please provide instructions on how to install your application",
"Please provide instructions on how to use your application",
"Please choose a license for your application",


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
