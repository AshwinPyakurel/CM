import { Button } from "bootstrap";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { deleteContact, editFavourite, retriveContacts } from "../actions/contacts.action";
import { DELETE_CONTACT } from "../actions/types";
import {FaMobile,FaHome,FaBuilding,FaStar,FaRegStar} from "react-icons/fa"

const Home = () =>{
    const contacts = useSelector(state => state.contactReducer.contactList);    
    console.log(contacts); 
    console.log(contacts);
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(retriveContacts());
    },[])

    // const deleteContact = (id) =>{
    //   dispatch({type:DELETE_CONTACT, payload:id});
    //   toast.success("Contact deleted successfully");
    // }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5 text-right">
                    <Link to={'/addContact'} className= "btn btn-outline-dark">Add Contacts</Link>
                </div>
                <div className="col-md-10 mx-auto">
                    <table className="table table-hover">
                    <thead className="table-header bg-dark text-white">
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col"></th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Image</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                {contacts.length > 0 ? (                  
                contacts.map((contact, id) => (                                   
                  <tr key={id}>                    
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>
                      {contact.favourite?
                      <button className="btn btn-sm " onClick={()=>{dispatch(editFavourite(contact._id,false))}}>
                        <FaStar size={20} color={"#fbb900"}/>
                      </button>:
                      <button className="btn btn-sm ">
                      <FaRegStar size={20} color={"#fbb900"} onClick={()=>{dispatch(editFavourite(contact._id,true))}}/>
                    </button>
                      
                    }
                    </td>  
                    <td>{contact.email}</td>
                    <td>  
                      {
                        contact.phone.mobileNumber?
                        <div>
                          <FaMobile/> 
                          {contact.phone.mobileNumber}
                        </div>:
                        null
                      }
                      {
                        contact.phone.homeNumber?
                        <div>
                          <FaHome/> 
                          {contact.phone.homeNumber}
                        </div>:
                        null
                      }
                      {
                        contact.phone.workNumber?
                        <div>
                          <FaBuilding/> 
                          {contact.phone.workNumber}
                        </div>:
                        null
                      }
                    {
                    }
                    </td>
                    <td>{contact.address}</td>
                    <td><img src={contact.imageUrl} alt="" height={30} width={30}/></td>
                    <td>
                      <Link
                        to={`/editcontact/${contact._id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"                        
                        className="btn btn-sm btn-danger"
                        onClick={() => {dispatch(deleteContact(contact._id))}}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Home;