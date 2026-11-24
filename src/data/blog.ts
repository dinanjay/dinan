import { getAllPosts, getAllTags, type BlogPost } from "@/lib/blog";

export type { BlogPost };
export const blogPosts = getAllPosts();
export const blogTags = getAllTags();
