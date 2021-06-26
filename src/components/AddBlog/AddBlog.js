import React, { useState } from 'react';
import SideNav from './SideNav/SideNav';

import { useContext } from 'react';
import { UserContext } from '../../App';
import './AddBlog.css'

const AddBlog = () => {
    
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);  
    const [info,setInfo]=useState({});
    const [file,setFile] = useState(null);

    const handleBlur = e =>{
        const newInfo = {...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
        console.log(info);
    }
    const handleFileChange = (e)=>{
        console.log(e.target.files);
        console.log(e.target.files[0]);
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit =() => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('blogTitle', info.blogTitle);
        formData.append('blogContent', info.blogContent);

        fetch('https://secure-bastion-15969.herokuapp.com/addBlogs', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <section className="">
            <div className="flex">
                <div className="sideNavSec">
                    <SideNav/>
                </div>
                <div className="col-md-10 p-4 pe-5" style={{right:'0',backgroundColor:'#F4FDFB'}}>
                    <div className="flex justify-content-between mb-4" style={{fontSize:'1.2em',fontWeight:'bold'}}>
                        <h2>Add Blog</h2>
                        <h4>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || " "}</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-3 form-group">
                            <label for="blogTitle" class="form-label">Title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="blogTitle" placeholder="Blog Title"/>
                        </div>
                        <div class="mb-3">
                            <label for="blogContent" class="form-label">Content</label><br />
                            {/* <textarea onBlur={handleBlur} name="" id="" cols="90" rows="10" placeholder="Blog Content"></textarea> */}
                            <input style={{height:'7em'}} onBlur={handleBlur} type="text" class="form-control" name="blogContent" placeholder="Blog Content"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Upload Blog Image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" name="file" placeholder="Picture"/>
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddBlog;