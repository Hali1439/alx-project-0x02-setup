// pages/home.tsx

import Head from 'next/head'
import Header from '../components/layout/Header'
import Card from '../components/common/Card'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | ALX Project 0x02</title>
      </Head>

      <Header />

      <main className="flex flex-col items-center justify-start min-h-screen bg-blue-50 text-gray-900 p-8">
        <h1 className="text-4xl font-bold mb-6">🏠 Home Page</h1>
        <p className="mb-4">Below are some dynamic cards created using reusable components:</p>

        <Card title="Welcome to ALX" content="This is your first dynamic card using TypeScript props!" />
        <Card title="Reusable Components" content="Reusable components help maintain clean and scalable code." />
        <Card title="Powered by Tailwind" content="Tailwind CSS lets you build modern UIs fast." />
      </main>
    </>
  )
}
