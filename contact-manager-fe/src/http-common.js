import axios from "axios";
import cookie from "react-cookies";

const token = cookie.load('token');
export default axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    "Content-type": "application/json",
    "Authorization" :"Bearer "+token
  }
});