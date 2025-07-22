// pages/about.tsx

import Head from 'next/head'
import Header from '../components/layout/Header'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | ALX Project 0x02</title>
        <meta name="description" content="About this ALX project setup using Next.js" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-4">📘 About Page</h1>
        <p className="text-lg">This page explains the purpose and setup of ALX Project 0x02 using Next.js, TypeScript, and Tailwind CSS.</p>
      </main>
    </>
  )
}
