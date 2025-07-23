// pages/posts.tsx

import Head from 'next/head';
import Header from '@/components/layout/Header';

const PostsPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Posts | ALX Project 0x02</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-start min-h-screen bg-white text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-4">📝 Posts Page</h1>
        <p>This page will show posts fetched from an external API later.</p>
      </main>
    </>
  );
};

export default PostsPage;
