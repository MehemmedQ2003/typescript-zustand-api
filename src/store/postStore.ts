import { create } from "zustand";
import type { Post } from "../types/Post";
import * as postApi from "../api/postsApi";

interface PostState {
    posts: Post[];
    loading: boolean;
    fetchPosts: () => Promise<void>;
    addPost: (post: Omit<Post, "id">) => Promise<void>;
    editPost: (post: Post) => Promise<void>;
    removePost: (id: number) => Promise<void>;
}

export const usePostStore = create<PostState>((set) => ({
    posts: [],
    loading: false,

    fetchPosts: async () => {
        set({ loading: true });
        const data = await postApi.getPosts();
        set({ posts: data, loading: false });
    },

    addPost: async (post) => {
        const newPost = await postApi.createPost(post);
        set((state) => ({ posts: [newPost, ...state.posts] }));
    },

    editPost: async (post) => {
        const updated = await postApi.updatePost(post);
        set((state) => ({
            posts: state.posts.map((p) => (p.id === updated.id ? updated : p)),
        }));
    },

    removePost: async (id) => {
        await postApi.deletePost(id);
        set((state) => ({
            posts: state.posts.filter((p) => p.id !== id),
        }));
    },
}));
