import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { UserProps } from '@/interfaces';

const UsersPage = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <>
      <Head>
        <title>Users | ALX Project 0x02</title>
      </Head>

      <Header />

      <main className="min-h-screen bg-slate-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">👥 Users List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export default UsersPage;
