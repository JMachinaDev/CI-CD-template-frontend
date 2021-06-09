import axios from 'axios';

const apiURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PRODUCTION : process.env.REACT_APP_DEV;

export default axios.create({
  baseURL: apiURL,
  headers: {
    "Content-type": "application/json"
  }
});
