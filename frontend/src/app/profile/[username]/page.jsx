"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';

const Page = () => {
  const { username } = useParams();
  const router = useRouter()
  const handleLogout = async () => {
    const re = await fetch('http://localhost:3100/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });
    const result = await re.json()
    console.log(result)
    router.push("/auth/signin")
    
  };

  return (
    <div>
      <h1>Hello {username}, I am the profile page</h1>
      <button onClick={handleLogout} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Logout
      </button>
    </div>
  );
};

export default Page;
