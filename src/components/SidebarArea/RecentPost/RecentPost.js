import React from 'react';
import './RecentPost.css'
import {
    Link
  } from 'react-router-dom';

const RecentPost = ({blog}) => {
    return (
        <div className="recentPost">
            <Link to={{ pathname: `/detailBlog/${blog._id}` }}>
            {blog.blogTitle}
            </Link>
        </div>
    );
};

export default RecentPost;