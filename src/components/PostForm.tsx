import { useState } from "react";
import { usePostStore } from "../store/postStore";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const PostForm = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const { addPost } = usePostStore();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addPost({ title, body, userId: 1 });
        setTitle("");
        setBody("");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
            <Typography variant="h6" gutterBottom>Yeni Post</Typography>
            <TextField
                type="text"
                placeholder="Başlıq"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
                margin="normal"
            />
            <br />
            <TextField
                multiline
                rows={4}
                placeholder="Məzmun"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                fullWidth
                margin="normal"
            />
            <br />
            <Stack direction="row" spacing={2}>
                <Button variant="contained" type="submit">Əlavə et</Button>
            </Stack>
        </form>
    );
};

export default PostForm;
