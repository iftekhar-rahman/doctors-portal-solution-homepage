import React from 'react';
import './Blogs.css';
import caudi from '../../../img/author-1.png';
import john from '../../../img/author-2.png';
import mitchel from '../../../img/author-3.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        title: '2 times of brush in a day can Keep you healthy',
        description: 'It is a long established fact that by the readable content of a lot layout. The point ',
        author: 'Dr. Caudi',
        authorImg: caudi,
        date: '23 April 2020'
    },
    {
        title: '2 times of brush in a day can Keep you healthy',
        description: 'It is a long established fact that by the readable content of a lot layout. The point ',
        author: 'Dr. Caudi',
        authorImg: john,
        date: '23 April 2020'
    },
    {
        title: '2 times of brush in a day can Keep you healthy',
        description: 'It is a long established fact that by the readable content of a lot layout. The point ',
        author: 'Dr. John Mitchel',
        authorImg: mitchel,
        date: '23 April 2020'
    }
]

const Blogs = () => {
    return (
        <section className="blogs-container">
            <div className="container">
                <div className="text-center mb-5">
                    <h5 style={{color: '#1CC7C1'}}>OUR BLOG</h5>
                    <h2>From Our Blog News</h2>
                </div>
                <div className="row">
                    {
                        blogData.map(blog => <BlogPost blog={blog}></BlogPost>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;