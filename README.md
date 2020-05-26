# Dele-gator

### Demo
A demo of this app is available [here.](https://lit-brook-86234.herokuapp.com/)

### General
This is a virtual delegation assistant to help managers find the right employee for a specific project.  Employee surveys are filled out to indicate technical competencies and personality traits of each member of the manager's team.  A project survey is filled out to indicate what skills and personality traits are desired for a specific project.  When the project survey is completed, Dele-gator informs the manager who the best person for the project will be.

From the home page, an option is given to fill out a project survey or an employee survey.

![Home page screenshot](/screenshots/home.PNG)

The employee survey requires a name and photo URL.  Once the survey is filled out, the Submit button will store the results in the Employees API.  

![Survey buttons screenshot](/screenshots/surveyButtons.PNG)

The Employees API button will display the JSON object of employees that have been created.  This app comes with four employees built-in for demonstration purposes.  Additional employees may be added if desired.

![Employee API screenshot](/screenshots/employeeAPI.PNG)

When the project survey is completed, the Submit button will display the best employee for the project. 

![Best employee screenshot](/screenshots/matchModal.PNG)

This project/employee match is stored in the Projects API.  When new projects are added, they are displayed at the bottom of the API with the project object followed by the matched employee object.  The image below shows that the best person for Project 1 is Jenna and the best person for Project 2 is Jules.

![Project API screenshot](/screenshots/projectAPI.PNG)

### Technical Information
This app was built by Mark Syphus (2020) using the following technologies:

* HTML
* CSS
* JavaScript
* jQuery
* Node.js
* Express.js
* Google Fonts
* Heroku