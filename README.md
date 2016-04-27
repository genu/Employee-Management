## Employee Management
This is a example employee management system for demonstration purposes
![Screenshot](https://github.com/genu/Employee-Management/blob/master/screenshot.png)

## Dependencies
This project as [Node](https://nodejs.org/en/) and [Bower](http://bower.io/) dependencies.
 
## Usage
## Running locally
1. Clone this repo
2. `npm install`
3. `npm start`

## Authentication
Authentication is mocked. A mechanism is in place to use an actual auth server, but for this demonstration, a password is hardcoded.

The password is `cookieMonster`

## Data Mocking
There is a service in place that communicates with the backend API. The backed is mocked, however, and list data is returned by loading the `employees.json` file located in `modules/core/mocks/employees.json`. All *CRUD* operations are supported, but only the **READ** is implemented. (All other verbs are gracefully resolved). 