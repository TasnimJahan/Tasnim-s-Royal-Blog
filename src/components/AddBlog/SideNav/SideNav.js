import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,  faTrashAlt, faGripHorizontal,faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../../App';

const SideNav = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [isAdmin,setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://secure-bastion-15969.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsAdmin(data));
    },[])

    const refreshPage=()=> {
        window.location.reload(false);
      }

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
                        <li>
                            <Link to="/home" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faHome} /> <span style={{marginLeft:'2%',color:'white'}}>Home</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/allBlogs" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faGripHorizontal} /> <span style={{marginLeft:'2%',color:'white'}}>All Blogs</span> 
                            </Link>
                        </li>
                        {
                    isAdmin && <div>
                        <li>
                            <Link to="/addBlog" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faPlus} /> <span style={{marginLeft:'2%',color:'white'}}>Add Blog</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to="/deleteBlog" className="text-white">
                                <FontAwesomeIcon className="icons" icon={faTrashAlt} /> <span style={{marginLeft:'2%',color:'white'}}>Delete Blog</span>
                            </Link>
                        </li>
                    </div>
                }
            </ul>

            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon className="icons" icon={faSignOutAlt} /> <span  onClick={refreshPage} style={{marginLeft:'2%', textDecoration: 'none',color:'white'}}>Logout</span></Link>
            </div>
        </div>
    );
};

export default SideNav;