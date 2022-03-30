import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/authActions";

const Login = () =>{
    const dispatch = useDispatch();    
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = (e)=>{        
        dispatch(login({username,password}));
    }
    const state = useSelector(state=>state);
    console.log(state);
    return(
        <div className="container main-wrapper">
            <h1 className="landing-title">Welcome to Contact Manager Application</h1>
           <div className="col-md-6 form-component">
               <>
                   <div className="form-group fg">
                       <input type="text" className="form-control" placeholder="Username"
                        onChange={(e)=>{setUsername(e.target.value)}}
                        value={username}
                       ></input>
                   </div>
                   <div className="form-group fg">
                       <input type="password" className="form-control" placeholder="Password"
                       onChange={(e)=>{setPassword(e.target.value)}}
                       value={password}
                       ></input>
                   </div>
                   <div className="form-group fg">
                       <input type= "submit" className="btn btn-dark" onClick={handleSubmit}></input>
                   </div>
               </>
            </div> 
        </div>
    );
}

export default Login;