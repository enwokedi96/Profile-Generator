# Profile-Generator

## Description
This command-line application takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Full details on operation and installation can be found in the sections below.


## **Table of Content**

- [Description](#Description)

- [Installation](#Installation)

- [Requirements](#Requirements)

- [Usage](#Usage)

- [Tests](#Tests)

### **Installation** 

To install,  simply clone this git repo to local machine and run in your local coding environment.

### **Requirements** 

NPM and NodeJS>=16 are the basic requirement. Other necessary dependencies/libraries include;
* jest >=29.4.0
* inquirer >=6.3.1

To install these dependencies, simply run "npm i" or "npm install (dependency)" depending on your local version of NodeJS.
Please do not change library versions unless familiar in the know.

## Usage
Open terminal in dev environment and run "node index.js". This will immediately start up the code, prompting user to enter their manager first, and then any other team members in the team. The prompt will continue to ask if user needs an engineer or intern unless the third option is selected to finish. This then populates our pre-designed html and creates the file for you. 

Please find a full instructional video on how to create team below.

[team-generator-workflow.webm](https://user-images.githubusercontent.com/116044356/215649940-2bf0bd5c-e80a-4847-97ca-b6e5bd020898.webm)

The final html page of this sample implementation is also shown below.

[output-team-img](images\127.0.0.1_5500_output_team.html.png)

## Tests
To run tests, simply enter "npm test" in the command line. All tests are confirmed to be fully functional and pass. Images for test in progresss and completed tests are shown below
<img src="images\tests-in-progress.PNG" style="width:50%"> <img src="images\tests-complete.PNG" style="width:50%">
