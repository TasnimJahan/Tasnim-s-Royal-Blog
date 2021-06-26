import React from 'react';
import './BlogSection.css'
import {
    Link
  } from 'react-router-dom';

const BlogSection = ({blog}) => {
    console.log(blog);
    const {_id, blogTitle,blogContent} = blog;

    return (
            <div class="card mb-3 blogSection">
                 {
                blog.image ? <img style={{height: '500px'}} src={`data:image/png;base64,${blog.image.img}`}/>
                :
                <img style={{height: '500px'}} className="img-fluid mb-3" src={`https://secure-bastion-15969.herokuapp.com/${blog.img}`} alt=""/>
            }
                {/* <img src={require(`../../images/${pic}`).default} class="card-img-top" alt="aa" /> */}
                <div class="card-body">
                    <h2 class="card-title title" style={{color: 'aqua'}}>{blogTitle}</h2>
                    <p class="card-text blogContents" style={{textAlign:'justify'}}>{blogContent}</p>
                    <Link to={{ pathname: `/detailBlog/${_id}` }}><button style={{marginTop:'0%!important',textAlign:'left'}} class="btn btn-primary w-25">Read More&gt;&gt; </button> </Link>
                    <p class="card-text text-left"><small class="text-muted">Last updated 5 month ago</small></p>
                </div>
            </div>
    );
};

export default BlogSection;