import React from 'react'
import logo from "../../assets/logo.png";
import { Link ,useNavigate} from 'react-router-dom';


import './AdminNavbar.scss'

const AdminNavbar = ({handleToggle,toggle}) => {
    const navigate = useNavigate();
   
    const handleLogout = () =>{
        localStorage.removeItem('freelance');
        navigate('/');
    }   
   
   
  return (
   <div className='admin-navbar' >
    <div onClick={handleToggle}>
        <i  className="fa-solid fa-bars"></i>
    </div>
    <div className='logo'>
        <img src={logo} height="35px" className="mx-4" alt="kec-logo" />
          Freelancing Forum
    </div>
    <div>
        <ul >
             <li className="nav-item mx-4">
              <Link to="/project/view" className="nav-link">
                <button className="btn nav-btn-1">All Project</button>
              </Link>
            </li>
            <li className="nav-item mx-4">
              <Link to="/department" className="nav-link">
                <button className="btn nav-btn-1">Explore</button>
              </Link>
            </li>
            
            <li className="d-flex align-items-center mx-3">
                <div className=' text-end '>
                    <button className="btn logout text-light" onClick={handleLogout}>Log Out</button>
                </div>
            </li>
            
        </ul>
    </div>
   </div>
  )
}

export default AdminNavbar

    