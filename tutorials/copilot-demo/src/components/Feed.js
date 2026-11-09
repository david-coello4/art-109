import React, { useEffect, useState } from 'react';
import Post from './Post';
import { fetchPosts } from '../utils/api';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await fetchPosts();
            setPosts(data);
        };

        getPosts();
    }, []);

    return (
        <div className="feed">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Feed;