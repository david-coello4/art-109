import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="post">
            <h2 className="post-title">{post.title}</h2>
            <p className="post-content">{post.content}</p>
            {post.image && <img src={post.image} alt={post.title} className="post-image" />}
            <div className="post-actions">
                <button className="like-button">Like</button>
                <button className="comment-button">Comment</button>
            </div>
        </div>
    );
};

export default Post;