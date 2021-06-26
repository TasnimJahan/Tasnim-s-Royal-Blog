import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import DeleteBlogDetail from './DeleteBlogDetail/DeleteBlogDetail';
import SideNav from '../AddBlog/SideNav/SideNav';
import './DeleteBlog.css';

const DeleteBlog = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('https://secure-bastion-15969.herokuapp.com/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    console.log(blogs);

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <div className="flex">
                <div className="sideNavSection" style={{width:'20%'}}>
                    <SideNav/>
                </div>
                <div className="form addReview">
                    <div className=" headSection">
                        <div className="d-flex justify-content-between mb-4" style={{fontSize:'1.2em',fontWeight:'bold'}}>
                            <h2>Delete Blog</h2>
                            <h4 style={{textAlign:'right'}}>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || "Me"}</h4>
                        </div>
                    </div> 

                
                    <div style={{width:'90%'}}>
                        <table className="table table-striped table-hover">
                            <tr>
                                <th scope="row">Id</th>
                                <th scope="row">Blog Title</th>
                                <th scope="row">Delete</th>
                            </tr>
                            
                            {
                            blogs.map(blog =><DeleteBlogDetail blog={blog} key={blog._id}></DeleteBlogDetail>)
                            } 

                        </table>
                    </div>
                </div>
            </div>
           </div>
    );
};
export default DeleteBlog;