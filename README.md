# CI-CD-Template-Frontend

Template for the Frontend MERN(MongoDb, Express, React, Node).
Minimal app created with 1 service to check Server API.
Meant to get you started with the bare minimum, and save you time.

# Getting Started

Your folder structure will be as follows.

> components

- Home.js
- TestHeartBeatService.js
  > services
- heartbeatservice.js
  App.js
  http-common.js
  index.js
  .env

# Steps

Go to directory where you will want to start project, in this case same place we have the backend folder.
Folder directory should look like following (add screenshot)

> backend
> ...
> frontend
> ...

- npm create-react-app frontend
- npm install axios react-router-dom

1. clear up react template, removing unecessary files
2. create 2 folders /components & /services
   in your main directory you should have 2 files App.js & index.js, create a .env file that will hold our enviroment variable, add the .env file to .gitignore (learn more about enviroment files), name must start with REACT*APP* followed by the name you give it i.e(REACT_APP_MY_VAR). set it equal to the uri from our server/backend, in our case it would be http://localhost:8000
3. create new file called http-common.js in main directory, this file will hold a module where we create an instance of AXIOS connecting to our server API, we will be able to call it from anywhere in our project, set our .env file to a variable, in our case called apiUrl, in our axios instance headers we will set the baseURL: to our .env varible we create apiUrl
4. in /services folder, create a file called heartbeatservice.js, this will serve as a class that will make the http GET request to our server(backend) API, create two class methods to retrieve data from 2 different routes/endpoints '/', and '/test'

- we import the instance of axios http requests and call the http GET request method on it to retrieve the data from the backend... learn more about HTTP Requests

5. in /components folder, create 2 files one for each route we retrieve from server API, Home.js & TestHeartBeatService.js, the latter will be temporary. create a component that use's useState & useEffect react hooks to set data response to content to be displayed on each component
6. in App.js import react-router-dom, and both of our components from the /components folder, setup our { Switch, Route, Link } methods from react-router-dom in our App component, setup up nav bar to visit each of our component individually
7. in index.js replace line 7 and 9 with { BrowserRouter } method and import from react-router-dom, this will allow us to visit each Route we have setup on our navigation bar in App.js
8. our project should be setup now to visit our backend server API endpoint, make sure to start/watch the backend and npm start our frontend

- the frontend automatically should be hosted on localhost:3000, on the server/backend we hosted it on localhost:8000
- on localhost:3000/ || localhost:3000/home we should see our 'home' page with our basic nav with 2 routes/link to 'Home Page' and 'Test Page', home page should display "hello world" data retrieved from the server/backend
- on localhost:3000/test we should see the nav with 2 routes/link to 'Home Page' and 'Test Page', test page should display "test route is working properly" data retrieved from the server/backend
