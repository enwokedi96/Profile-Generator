const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// array of questions for user
let questions = {
    manager: [
        {
            type: 'input',
            message: "Enter manager's name...",
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter manager's ID...",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter manager's email address...",
            name: 'email',
        },
        {
            type: 'input',
            message: "Enter manager's office number...",
            name: 'officeNumber',
        },
    ],
    engineer:[
        {
            type: 'input',
            message: "Enter engineer's name...",
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter engineer's ID...",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter engineer's email address...",
            name: 'email',
        },
        {
            type: 'input',
            message: "Enter engineer's github name...",
            name: 'github',
        },
    ],
    intern: [
        {
            type: 'input',
            message: "Enter intern's name...",
            name: 'name',
        },
        {
            type: 'input',
            message: "Enter intern's ID...",
            name: 'id',
        },
        {
            type: 'input',
            message: "Enter intern's email address...",
            name: 'email',
        },
        {
            type: 'input',
            message: "Enter intern's school...",
            name: 'school',
        },
    ],
    addPersonnel:[
        {
            type: 'list',
            message: "Wanna add an extra team member? (if not, click 'Finish building team')",
            name: 'options',
            choices: ["Add an engineer", "Add an intern", "Finish building team"]
        }
    ]
};

// object of user answers
let userAnswers = [];

// this function expression gives the user the option of choosing which
// optional sections to add to the file
const managerInfo={};
const engineerInfo={};
const internInfo ={};

const logUserInputs = () => {
    console.log(`Program loaded!!\nPlease enter manager deets...`)
    // First phase of inquiry
    inquirer.prompt(questions.manager).then((response)=>{
        console.log(response);
        userAnswers.push(response);
    })

    let currentUserOpt = ''
    while (true){
        inquirer.prompt(questions.addPersonnel).then((response)=>{
            currentUserOpt = response;
        });
        console.log('User has chose to: ',currentUserOpt);
        if (currentUserOpt.toLowerCase().includes('finish')){
            console.log('Now ending choice loop...')
        }
        else if (currentUserOpt.toLowerCase().includes('intern')){
            console.log('Now ending choice loop...')
        }
    }
}

logUserInputs();
