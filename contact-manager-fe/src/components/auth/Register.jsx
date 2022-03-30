import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { register } from "../../actions/authActions";


const Register = () =>{    
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const handleSubmit = (e)=>{        
        dispatch(register({username,password,email}));
    }
    return(
        <div className="container my-60">            
           <div className="col-md-6">
               {/* <>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Name"></input>
                   </div>
                   <div className="form-group">
                       <input type="file" className="form-control" placeholder="Image"></input>
                   </div>
                   <div className="col-md-12">
                       <div className="row">
                         <div className="col-md-4">
                         <input type="text" className="form-control" placeholder="Work Number"></input>
                         </div>
                         <div className="col-md-4">
                         <input type="text" className="form-control" placeholder="Phone Number"></input>
                         </div>
                         <div className="col-md-4">
                         <input type="text" className="form-control" placeholder="Home Number"></input>
                         </div>
                       </div>
                   </div>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Address"></input>
                   </div>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Email"></input>
                   </div>
                   <div className="form-group">
                       <input type= "submit" className="btn btn-dark" onClick={handleSubmit} ></input>
                   </div>               
                </> */}
                    <div className="form-group">
                       <input type="text" className="form-control" placeholder="Username" value={username}
                       onChange={(e)=>{setUsername(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <input type="password" className="form-control" placeholder="Email" value={password}
                       onChange={(e)=>{setPassword(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <input type="text" className="form-control" placeholder="Email" value={email}
                       onChange={(e)=>{setEmail(e.target.value)}}
                       />
                   </div>
                   <div className="form-group">
                       <input type= "submit" className="btn btn-dark" onClick={handleSubmit} ></input>
                   </div>
            </div> 
        </div>
    );
}

export default Register;