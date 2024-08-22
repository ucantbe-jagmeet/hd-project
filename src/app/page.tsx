'use client'
import UserProfile from '@/components/UserProfile';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react'

const Home = () => {
   useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        redirect('/register'); 
      }
    }, []);
  return (
    <div>
      <UserProfile />
    </div>
  )
}

export default Home
