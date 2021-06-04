import axios from 'axios';

const apiURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PRODUCTION : process.env.REACT_APP_DEV;
console.log('API url = ' + apiURL, " ", 'build status = ' + process.env.NODE_ENV)

export default axios.create({
  baseURL: apiURL,
  headers: {
    "Content-type": "application/json"
  }
});
