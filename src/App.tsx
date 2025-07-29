import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>JSONPlaceholder Postlar (CRUD + Zustand)</Typography>
      <PostForm />
      <PostList />
    </Container>
  );
}

export default App;