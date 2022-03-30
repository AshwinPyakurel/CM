import http from "../http-common";

export const loginService = (data) => {
    return http.post("/signin",data);
  };
  export const registerService = (data) => {
    return http.post("/signup",data);
  };