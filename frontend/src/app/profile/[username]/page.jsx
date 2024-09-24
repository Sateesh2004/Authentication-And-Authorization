"use client"
import React from 'react'
import { useParams } from 'next/navigation';
const page = () => {
    const { username } = useParams();
    console.log("username is",username)
  return (
    <div>
      Hello {username} I am profile page
    </div>
  )
}

export default page
