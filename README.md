# cypress
## About Cypress ##
* An open source, front-end testing tool, built for the modern web
* Cypress Features: https://www.cypress.io/features/
* How Cypress works: https://www.cypress.io/how-it-works/ 
* There is good documentation and examples available here: https://docs.cypress.io

# Pre-requisite #
* Nodejs should be installed (https://nodejs.org/en/). It also installs npm.
* Check version of node (node -v) and npm (npm -v) from terminal

# Download Tests from GitHub, Install Cypress#
* Open Terminal/Command prompt
* Go to path where you want to setup Cypress tests (Eg: /Users/username/Documents)
* git clone https://github.com/munishasharma/cypress.git
* $ npm install (This installs Cypress and other dependencies)the root of your project to ensure cypress is installed in the correct directory.
* $ node_modules/.bin/cypress open   (Opens Cypress Test Runner)


# Run Cypress Tests #
* Run one test or all tests from Cypress Test Runner (using GUI) on Chrome
* Run on Command line:- cypress run --reporter reporters/custom.js


# Reports 
Test run reports is available in dashboard on chrome.
Command line :- cypress run --reporter mochawesome
			the video and screenshot folder will be created 

# Folder structure:-

1) fixtures
	a) config.json:- configurations like reporting configurations is available
	b) locators.json:-Data Selectors will be available here
2) integration
	a) login.jstest cases for Login Functionality)
	b) setting.js ( Test cases for setting)	
3) plugins ( I don't have any plugin at the moment, but plugins will be available here)
4) supports
	a) commands.js 
	b) constants.js (Constants will be available here)
	c) helperFile.js ( common functions to reuse will be available here)
