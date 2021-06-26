import React, { useEffect, useState } from 'react';
import AllBlogsDAtaTable from './AllBlogsDAtaTable/AllBlogsDAtaTable';
import './AllBlogs.css'
import SideNav from '../AddBlog/SideNav/SideNav';
import { useContext } from 'react';
import { UserContext } from '../../App';


const AllBlogs = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);  
    const [blogLists, setBlogLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogLists(data))
    }, [])
    console.log(blogLists);
    return (
        <div className="d-flex " >
            <div className="sideNavSection">
                <SideNav/>
            </div>
            <div className="col-md-10 p-4 " style={{ right: 0, backgroundColor: "#2f3031" }}>
                    <div className="flex justify-content-between mb-4" style={{fontSize:'1.2em',fontWeight:'bold',color:'white'}}>
                        <h2>All Blog</h2>
                        <h4 style={{textAlign:'right'}}>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || "Me"}</h4>
                    </div>
                <AllBlogsDAtaTable blogLists={blogLists} />
            </div>
        </div>
    );
};

export default AllBlogs;