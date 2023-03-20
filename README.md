# cypressautomation
--------------------
For Web automation project

# Environmental Setup
----------------------
1. Download & Install nodejs
2. Download & Install VSCode
3. Create a new folder for project & open in VSCode
4. open cmd/Terminal then execute below command
    a. npm -i init  (This creates package.json file)
5. Install Cypress
    a. npm install cypress --save -dev
6. Start Cypress
    a. npx cypress open
    (or)
    b. node_module/.bin/cypress open

# Running Tests/Specs
---------------------
To open Cypress Runner
 npx cypress open

To Run All the specs under e2e folder
 npx cypress run
 npx cypress run --headed

To Run Single spec under e2e folder
 npx cypress run –-spec cypress\e2e\MyTest.js"


To Run All the specs under e2e folder using Chrome
 npx cypress run --browser chrome
 npx cypress run --browser edge

 npx cypress run --browser edge --headed
