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
    // manager list of questions
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
    // enginners list of questions
    engineer: [
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
    // intern list of questions
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
    // to add more staff or exit??
    addPersonnel: [
        {
            type: 'list',
            message: "\nWanna add an extra team member? (if not, click 'Finish building team')",
            name: 'options',
            choices: ["Add an engineer", "Add an intern", "Finish building team"]
        }
    ]
};

// object of user answers
let userAnswers = [];

// this function expression gives the user the option of choosing which
// optional sections to add to the file

const logUserInputs = async() => {

    console.log(`Program loaded!!\nPlease enter manager deets...`);

    // First phase of inquiry: managers
    await inquirer.prompt(questions.manager).then((response)=>{
        console.log(response);
        userAnswers.push(new Manager(response.name, response.id, 
                                    response.email, response.officeNumber));
    });

    let currentUserOpt = ''
    // loop continously
    while (true){
        // to add more staff or finish?
        await inquirer.prompt(questions.addPersonnel).then((response)=>{
            currentUserOpt = response.options;
        });
        console.log('\nUser has chose to: ',currentUserOpt);

        // break loop if user does select finish
        if (currentUserOpt.toLowerCase().includes('finish')){
            console.log('Now ending choice loop...');
            break;
        }

        // if intern, run an inquiry for intern and update answers
        else if (currentUserOpt.toLowerCase().includes('intern')){
            console.log('\nPopulating new intern info...');
            await inquirer.prompt(questions.intern).then((response)=>{
                userAnswers.push(new Intern(response.name, response.id, 
                                            response.email, response.school));
            });
        }

        // if engineer, run an inquiry for engineer and update answers
        else if (currentUserOpt.toLowerCase().includes('engineer')){
            console.log('\nPopulating new engineer info...');
            await inquirer.prompt(questions.engineer).then((response)=>{
                userAnswers.push(new Engineer(response.name, response.id, 
                                            response.email, response.github));
            });
        }
    }
    // populate answers into intended divs and create html
    const html = render(userAnswers);

    // write html to intended path
    fs.writeFile(outputPath, html, (err) =>
            err ? console.error(err) : console.log('All Done! Powered by Your Fav Uncle (Ruckus) Israel!')
            );
}

//  run
logUserInputs();

// 
