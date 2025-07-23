// pages/posts.tsx

import Head from "next/head";
import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

interface PostsPageProps {
  posts: PostProps[];
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
  const posts = await res.json();

  return {
    props: { posts },
  };
};

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Head>
        <title>Posts | ALX Project 0x02</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-gray-50 text-gray-900 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">📝 Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default PostsPage;
