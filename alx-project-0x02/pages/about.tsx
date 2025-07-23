// pages/about.tsx

import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | ALX Project 0x02</title>
        <meta name="description" content="About this ALX project setup using Next.js" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-4">📘 About Page</h1>
        <p className="text-lg text-center max-w-xl mb-6">
          This page demonstrates the use of a reusable <code>Button</code> component with customizable props using TypeScript and Tailwind CSS.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <Button label="Small Button" size="small" shape="rounded-sm" />
          <Button label="Medium Button" size="medium" shape="rounded-md" />
          <Button label="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
};

export default AboutPage;
