import React, { useEffect, useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link, useParams } from 'react-router-dom';
// import { useParams } from 'react-router';
import './DetailBlog.css'
import SocialContact from '../../Shared/SocialContact/SocialContact';
// import Date from '../DetailBlog/Date';

const DetailBlog = () => {
    const { id } = useParams();
    console.log(id);
    const [blog,setBlog]=useState({})
    useEffect(() => {
        fetch(`https://secure-bastion-15969.herokuapp.com/blogs/${id}`)
        .then((response) =>response.json())
        .then(data => {
            console.log(data[0])
            setBlog(data[0]);
        })
    },[])
    console.log(blog);
    const {blogTitle,blogContent}=blog;
    return (
        <div className="detailBlog">
            <Navbar/>
            <div className="detailBlogArea container">
                {/* <h2>The id is={id}</h2> */}
                <h1 className="detailTitle">{blogTitle}</h1>
                <p style={{textAlign:'justify'}}>It is a blog from Tasnims Blog(T'blog). We will be happy if you join with us. and give us your valuable feedback.. Bless to find you. Stay with us.. Happy reading......</p>
                {/* <img className="detailImg " src={require(`../../../images/slide2.jpg`).default} alt="aa" /> */}
                {
                blog.image ? <img className="detailImg " src={`data:image/png;base64,${blog.image.img}`}/>
                :
                <img className="detailImg img-fluid mb-3" src={`https://secure-bastion-15969.herokuapp.com/${blog.img}`} alt=""/>
            }
                <footer className="text-center mb-4 text-muted">{blogTitle}</footer>
                <p className="detailText">{blogContent}</p>
                <SocialContact/>
            </div>
        </div>
    );
};

export default DetailBlog;