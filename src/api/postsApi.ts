import axios from "axios";
import type { Post } from "../types/Post";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get(BASE_URL);
    return response.data;
};

export const getPostById = async (id: number): Promise<Post> => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
};

export const createPost = async (post: Omit<Post, "id">): Promise<Post> => {
    const response = await axios.post(BASE_URL, post);
    return response.data;
};

export const updatePost = async (post: Post): Promise<Post> => {
    const response = await axios.put(`${BASE_URL}/${post.id}`, post);
    return response.data;
};

export const deletePost = async (id: number): Promise<void> => {
    await axios.delete(`${BASE_URL}/${id}`);
};
