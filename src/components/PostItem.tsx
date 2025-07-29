import type { Post } from "../types/Post";
import { usePostStore } from "../store/postStore";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const PostItem = ({ post }: { post: Post }) => {
    const { removePost } = usePostStore();

    const handleDelete = () => {
        removePost(post.id);
    };

    return (
        <div style={{ border: "1px solid #ccc", margin: "1rem 0", padding: "1rem", borderRadius: "10px", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)", transition: "all 0.3s ease", width: "100%"  }}>
            <Typography variant="h5">{post.title}</Typography>
            <Typography variant="body1">{post.body}</Typography>
            <Stack direction="row" spacing={2} justifyContent="flex-end" mt={2}>
                <Button variant="contained" onClick={handleDelete}>Sil</Button>
            </Stack>
        </div>
    );
};

export default PostItem;
