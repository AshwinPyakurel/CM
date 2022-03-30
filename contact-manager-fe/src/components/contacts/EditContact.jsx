import React,{ useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";
const EditContact = () =>{
    const {id} = useParams();    
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [image,setImage] = useState();
    
    
    const contacts = useSelector(state=>state);
    const currentContact = contacts.find(contact=>contact.id === parseInt(id));
    

    useEffect(() =>{                       
        setName(currentContact.name);
        setEmail(currentContact.email);
        setPhoneNumber(currentContact.phoneNumber);
        setImage(currentContact.email);                    
    },[currentContact]);

    
    return(
        <div className="container">  
            {currentContact ?( 
                <>
            <div className="row">
                <h1 className="display-3 text-center"> Edit Contact {id}</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form action="" method="post">
                        <div className="form-group my-10" enctype= "multipart/form-data">
                            <input type="text" name="" id="" value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="text" name="" id="" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="text" name="" id="" value={phoneNumber} onChange={e => setEmail(e.target.value)} placeholder="Phone Number" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="file" name="" id="" value={image} onChange={e => setEmail(e.target.value)} placeholder="image"/>
                        </div>
                        <div className="form-group my-10">
                        <input type="submit" value="Edit Contact" name="" id="" placeholder="image" className="btn btn-block btn-dark"/>
                        <Link to={'/'} className= "btn btn-danger ml-3">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
            </>
            ):(
                <h1 className="display-3 my-5 text-center">Studentcontact with id {id} doesnot exits</h1>
            )};
        </div>
    );
}
export default EditContact