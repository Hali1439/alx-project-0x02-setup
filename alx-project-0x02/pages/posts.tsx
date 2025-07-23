// pages/posts.tsx

import Head from "next/head";
import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await res.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Posts | ALX Project 0x02</title>
      </Head>

      <Header />

      <main className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center">📬 Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
