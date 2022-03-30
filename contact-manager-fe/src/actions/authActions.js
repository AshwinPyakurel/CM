import cookie from "react-cookies"
import { toast } from "react-toastify"
import { loginService, registerService } from "../service/auth.service"
import { MAKE_AUTHENTICATED, MAKE_UNAUTHENTICATED } from "./types"

export const MakeAuthenticate = (payload)=>{
    
    return{
        type:MAKE_AUTHENTICATED,
        payload
    }
}

export const MakeUnauthenticate = ()=>{
    cookie.remove('token');
    cookie.remove('username');
    return{
        type:MAKE_UNAUTHENTICATED,
        payload:"sdf"
    }
}

export const login =(data)=>{       
    const {username,password} = data;
    return (dispatch)=>{
        var cred = {
            username,password
        }
    //    axios.post("http://localhost:5000/signin",cred)
        loginService(cred)
        .then((res)=>{
            console.log(res.data);
            var {username,email,token} = res.data;
            cookie.save('token',token);
            cookie.save('username',username);
            cookie.save('email',email)
            dispatch(MakeAuthenticate({username,email,token}))
        })
        .catch(err=>{
            console.log(err.response);
        })
    }
}

export const register = (data) =>{
    const {username,email,password} = data;
    return ()=>{
        var cred = {username,email,password}
        registerService(cred).then((res)=>{
            toast.success("User created successfully");
        })
    }
}

export const authCheck = ()=>{
    return (dispatch) =>{
        var token = cookie.load('token');
        var username = cookie.load('username');
        var email = cookie.load('email');
        if(token){
            dispatch(MakeAuthenticate({username,token,email}))
        }else{
            dispatch(MakeUnauthenticate());
        }
    }
}

