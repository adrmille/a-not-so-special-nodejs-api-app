# insurance-policies-app
An application that manages some information regarding insurance policies and company clients.  

## Motivation
The craft of this application is part of a requested assessment to incorporate a professional team of API developers.  
It was also a cool challenge for a senior java developer with basic knowledge about nodejs and which wanted to improve on this side.  
For me more information of this challenge: [backend_test.pdf](https://github.com/adrmille/a-not-so-special-nodejs-api-app/blob/28-update_readme/docs/backend_test.pdf)

## Features
| Endpoint   |      Type      |      Body      |  Description |
|------------|:--------------:|:--------------:|-------------:|
| `/auth/login` |  POST | `{userId: "user id", password: "any password will work"}` | Authenticate to get a token |
| `/users/{id}` |  GET | none | Get user data filtered by user id |
| `/users/search/q={name}` |    GET   | none |   Get User data filtered by user name |
| `/policies/search/q={userName}` | GET | none |    Get a list of policies linked to a user name |
| `/policies/{id}/user` | GET | none |    Get a user linked to a policy id |

Note: Simple users can only request for their own datas.  

Apart from the `/auth/login` endpoint, for every other endpoint you need to pass the token in the header of each request.  
*Ex:* 
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ0ZTQ0M...
```
Don't forget about the `Bearer` word.

## Requirements
* Node.js v10.16.3+
* MongoDB 3.6+

## Setup & run
Download the sources.

### Datasource configuration
The application is using a cloud instance of mongodb for data storage.  
Update the password field in `src/config/config.json`:
``` json
"mongodb_url": "mongodb+srv://dev1:<password>@cluster0-c3emg.mongodb.net/insurance-policies-db?retryWrites=true&w=majority",
```

### Setup npm
``` shell script
npm install
```

### Start the application
``` shell script
npm run start
```
or for developers
``` shell script
npm run start-dev
```

### Go on the swagger page
**Swagger** is deployed with the app, so you can see and test the API without a third party tool.  
You just need to go: `http://<your host>/api-docs`

### A testing scenario
Here two set of data you can start with:  
**Name: Britney**  
Role: admin  
Id: a0ece5db-cd14-4f21-812f-966633e7be86  

**Name: Merrill**  
Role: user  
Id: 44e44268-dce8-4902-b662-1b34d2c10b8e  

## Possible improvements
There is lot of them, some are already listed ine the issue section [here](https://github.com/adrmille/a-not-so-special-nodejs-api-app/issues).
* Store the JWT token status in database and add an expiration date
* Store the user credential in a database or a third party app like Keycloack
* Validate and sanitize all parameters coming from the outside
* Use a logging library like Winston & add more logs
* Add unit tests (mocha or jasmine)
* Use docker and docker compose to build a local env with a local database
* Add blackbox end2end testing with Cucumber scenarios
* Improve code security
* Improve code quality with eslint
* Cache external calls