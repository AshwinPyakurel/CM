import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {useLocation, useNavigate} from "react-router-dom";
import { addContact, editContact } from "../../actions/contacts.action";
const AddContact = () =>{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [phoneNumber,setPhoneNumber] = useState();
    const [workNumber,setWorkNumber] = useState();
    const [homeNumber,setHomeNumber] = useState();
    const [address,setAddress] = useState();
    const [photo,setPhoto] = useState();
    const [photoName,setPhotoName] = useState("");
    useEffect(()=>{
        checkifEdit();
    },[])
    const location = useLocation();
    const pathname = location.pathname;
    var pathArray = pathname.split("/");
    var path = pathArray[1];
    var contactId = pathArray[2];
    var isEdit = path == "editcontact";
    var contactList = useSelector(state=>state.contactReducer.contactList);
    var userIndex;
    const checkifEdit =()=>{
        if(isEdit){
            var index = contactList.findIndex((contact)=>{
                return contact._id == contactId;
            });
            userIndex = index;            
            var ud = contactList[userIndex];
            setName(ud.name);
            setEmail(ud.email);
            setPhoneNumber(ud.phone.mobileNumber);
            setWorkNumber(ud.phone.workNumber);
            setHomeNumber(ud.phone.homeNumber);
            setAddress(ud.address);
            setPhoto(ud.photoName);
        }
    }
    
    
    // const contacts = useSelector(state => state.contactReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const checkContactEmailExists = contacts.filter((contact) =>
    //   contact.email === email ? contact : null
    // );
    // const checkContactPhoneExists = contacts.filter((contact) =>
    //   contact.phoneNumber === phoneNumber ? contact : null
    // );
    const handleSubmit= () =>{
        // e.preventDefault();
        if (!email || !name || !phoneNumber) {
            return toast.warning("All the fields are required!!");
        }
        // if (checkContactEmailExists.length > 0) {
        //     return toast.error("This email already exists!!");
        //   }
        //   if (checkContactPhoneExists.length > 0) {
        //     return toast.error("This phone number already exists!!");
        //   }               
        var fd = new FormData();
        fd.append("name",name)
        fd.append("email",email)
        fd.append("mobileNumber",phoneNumber)
        fd.append("homeNumber",homeNumber)
        fd.append("address",address)        
        fd.append("photo",photo);        
        dispatch(addContact(fd));
        toast.success("Contact added successfully");
        navigate("/");
    }
    
    const handleEditSubmit= () =>{
        console.log("hello");
        // e.preventDefault();
        if (!email || !name || !phoneNumber) {
            return toast.warning("All the fields are required!!");
        }
        // if (checkContactEmailExists.length > 0) {
        //     return toast.error("This email already exists!!");
        //   }
        //   if (checkContactPhoneExists.length > 0) {
        //     return toast.error("This phone number already exists!!");
        //   }               
        var efd = new FormData();        
        efd.append("name",name)
        efd.append("email",email)
        efd.append("mobileNumber",phoneNumber)
        // efd.append("homeNumber",homeNumber)
        efd.append("address",address)        
        efd.append("photo",photo);                
        dispatch(editContact(contactId,efd,()=>{navigate("/")}));
        toast.success("Contact updated successfully");
        
    }
    return(
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center"> {isEdit?"Edit":"Add"} Contact                   
                </h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    {/* <form action="" method="post" onSubmit={handleSubmit}> */}
                        <div className="form-group my-10" encType= "multipart/form-data">
                            <input type="text" name="" id="" value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            <input type="text" name="" id="" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="form-control"/>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Work Number" value={workNumber} onChange={e => setWorkNumber(e.target.value)}></input>
                                </div>
                                <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>
                                </div>
                                <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Home Number" value={homeNumber} onChange={e => setHomeNumber(e.target.value)}></input>
                                </div>
                            </div>
                        </div>
                        <div className="form-group my-10">
                            <input type="file" name="" id="" value={photoName} onChange={e => {
                                setPhoto(e.target.files[0])
                                setPhotoName(e.target.value);
                                }} placeholder="photo"/> 
                        </div>
                        <div className="form-group my-10">
                            <input type="text" name="" id="" value={address} onChange={e => setAddress(e.target.value)} placeholder="Email" className="form-control"/>
                        </div>
                        <div className="form-group my-10">
                            {isEdit?
                            <input type="submit" value="editcontact" name="" id="" placeholder="photo" className="btn-block btn-dark"
                            onClick={handleEditSubmit}
                            />:
                            <input type="submit" value="addcontact" name="" id="" placeholder="photo" className="btn-block btn-dark"
                                    onClick={handleSubmit}
                                />}
                        </div>
                    {/* </form> */}
                </div>
            </div>
        </div>
    );
}
export default AddContact