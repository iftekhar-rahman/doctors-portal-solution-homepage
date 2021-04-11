import React from 'react';

const BlogPost = ({blog}) => {
    return (
        <div className="col-md-4">
            <div className="single-blog">
                <div className="author">
                    <img src={blog.authorImg} alt=""/>
                    <h6>{blog.author} <span>{blog.date}</span></h6>
                </div>
                <h6>{blog.title}</h6>
                <p>{blog.description}</p>
            </div>
        </div>
    );
};

export default BlogPost;