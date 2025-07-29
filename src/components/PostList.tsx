import { useEffect } from "react";
import { usePostStore } from "../store/postStore";
import PostItem from "./PostItem";
import Typography from '@mui/material/Typography';

const PostList = () => {
    const { posts, fetchPosts, loading } = usePostStore();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts]);

    if (loading) return <p>Yüklənir...</p>;

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%" }}>
            <Typography variant="h5" gutterBottom>Postlar</Typography>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </div>
    );
};

export default PostList;
