import axios from "axios";

// TODO: change base properties value using .env
const httpReq = axios.create({
  baseURL: 'http://127.0.0.1:5000/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

export {httpReq}