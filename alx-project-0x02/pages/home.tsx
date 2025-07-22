import React from 'react'
import Head from 'next/head'
import Header from '../components/layout/Header'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project 0x02</title>
        <meta name="description" content="This is the Home page for ALX Next.js project" />
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-center min-h-screen bg-blue-50 text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-4">🏠 Home Page</h1>
        <p className="text-lg">Welcome to the home page of your ALX Project 0x02.</p>
      </main>
    </>
  )
}
