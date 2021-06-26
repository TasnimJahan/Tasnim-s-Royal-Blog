import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import './DeleteBlogDetail.css'
import DeleteIcon from '../../../images/icons/delete.png'


const DeleteBlogDetail = ({blog}) => {
    console.log(blog);
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);  
    console.log(loggedInUser.email);
        const deleteEvent=(id)=>{
            fetch(`https://secure-bastion-15969.herokuapp.com/deleteBlogs/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(result => {
                console.log("successfully deleted");
                if(result){           
                    document.getElementById("serviceRow").style.display="none"
                }
            })
            
        }
    
        return (
       <tbody id="serviceRow">
            <tr>
                <td scope="col">{blog._id}</td>
                <td scope="col">{blog.blogTitle}</td>
                <td onClick={() =>deleteEvent(blog._id)} scope="col"><img className="deleteIcon" style={{margin:'0 auto'}} src={DeleteIcon} alt=""/></td>
            </tr>
       </tbody>
        );
};

export default DeleteBlogDetail;