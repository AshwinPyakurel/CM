import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { Link ,useNavigate} from "react-router-dom";
import { register } from "../../actions/authActions";


const Register = () =>{    
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e)=>{        
        dispatch(register({username,password,email}));
        navigate('/login')
    }
    return(
        <div className="container my-60">    
        <div className="row">
                <div className="col-md-10"><h1 className="landing-title">Welcome to Contact Manager Application</h1></div>
                <div className="col-md-2 register-btn">
                    <Link to={'/Login'} className= "btn btn-outline-dark">Login</Link>
                </div>
            </div>        
            <h1 className="display-5 my-3 text-center bc-title">Register</h1>
           <div className="col-md-6 shadow mx-auto form-component">               
                    <div className="form-group fg">
                       <input type="text" className="form-control" placeholder="Username" value={username}
                       onChange={(e)=>{setUsername(e.target.value)}}
                       />
                   </div>
                   <div className="form-group fg">
                       <input type="password" className="form-control" placeholder="Email" value={password}
                       onChange={(e)=>{setPassword(e.target.value)}}
                       />
                   </div>
                   <div className="form-group fg">
                       <input type="text" className="form-control" placeholder="Email" value={email}
                       onChange={(e)=>{setEmail(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <input type= "submit" className="btn btn-dark" onClick={handleSubmit} value="Register" />
                   </div>
            </div> 
        </div>
    );
}

export default Register;