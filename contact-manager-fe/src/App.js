import './App.css';
import { ToastContainer } from "react-toastify";
import Navbar from './components/NavBar';
import { Routes,Route,Navigate, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import AddContact from './components/contacts/AddContacts';
import EditContact from './components/contacts/EditContact';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { useDispatch, useSelector } from 'react-redux';
import { authCheck } from './actions/authActions';
import { useEffect } from 'react';
const App = () => {
  var dispatch = useDispatch();
  useEffect(()=>{
    dispatch(authCheck());
  },[])
  var {loggedIn} = useSelector(state=>state.authReducer)
  return (
    <div className="App">
      <ToastContainer />
      {
        loggedIn?
        <>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element= {<Home/>}></Route>
          <Route path = "/addcontact" element={<AddContact/>}></Route>
          <Route path = "/editcontact/:id" element={<AddContact/>}>
          </Route>
          <Route
            path="*"
            element={<Navigate to="/" replace />}
    />
        </Routes>
        </>:
        <Routes>
        <Route exact path = "/login" element= {<Login/>}></Route>        
        <Route exact path = "/register" element= {<Register/>}></Route>
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
  />
      </Routes>
      }
    </div>
  );
}

export default App;
