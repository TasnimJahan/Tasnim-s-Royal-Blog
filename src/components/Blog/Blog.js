import React, { useEffect, useState } from 'react';
import './Blog.css'
import BlogSection from './BlogSection'
import Calender from '../SidebarArea/Calender/Calender'
import SearchBar from '../SidebarArea/SearchBar/SearchBar';
import RecentPost from '../SidebarArea/RecentPost/RecentPost';
import RecentComment from '../SidebarArea/RecentComment/RecentComment';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect( () => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    console.log(blogs);

    // const blogs = [
    //     {
    //         id:1,
    //         pic:'slide1.jpg',
    //         title:'Lorem ipsum dolor sit amet111',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, fugit sit nobis quis sed rerum ratione molestiae numquam quidem ea voluptas eos enim perferendis accusantium laudantium cupiditate cum ipsa illo dicta praesentium et nisi! Maiores voluptatem commodi perspiciatis culpa. Inventore modi, debitis obcaecati iusto natus iste consequuntur doloremque vel nam.'
    //     },
    //     {
    //         id:2,
    //         pic:'slide2.jpg',
    //         title:'Lorem ipsum dolor sit amet2222',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, fugit sit nobis quis sed rerum ratione molestiae numquam quidem ea voluptas eos enim perferendis accusantium laudantium cupiditate cum ipsa illo dicta praesentium et nisi! Maiores voluptatem commodi perspiciatis culpa. Inventore modi, debitis obcaecati iusto natus iste consequuntur doloremque vel nam.'
    //     },
    //     {
    //         id:3,
    //         pic:'slide3.jpg',
    //         title:'Lorem ipsum dolor sit amet333333',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, fugit sit nobis quis sed rerum ratione molestiae numquam quidem ea voluptas eos enim perferendis accusantium laudantium cupiditate cum ipsa illo dicta praesentium et nisi! Maiores voluptatem commodi perspiciatis culpa. Inventore modi, debitis obcaecati iusto natus iste consequuntur doloremque vel nam.'
    //     },
    // ]
    return (
        <div className="blog">
            <div className="container">
            <div className="row">
                <div className="col-md-8 blogArea">
                    {
                        blogs.map(blog=> <BlogSection key={blog._id} blog={blog}></BlogSection>)
                    }
                </div>
                <div className="col-md-4 sidebars">
                    <Calender/>
                    <SearchBar/>
                    <div className="recent-post">
                        <h1 style={{color: 'white', borderBottom:'2px dotted white', paddingBottom:'2%'}}>RECENT POSTS</h1>
                        {
                            blogs.map(blog=> <RecentPost key={blog._id} blog={blog}></RecentPost>)
                        }
                    </div>
                    <div className="recent-comment">
                        <h1 style={{color: 'white', borderBottom:'2px dotted white', paddingBottom:'2%'}}>RECENT COMMENTS</h1>
                        <RecentComment/>
                    </div>
                    <Calender/>
                    <SearchBar/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;