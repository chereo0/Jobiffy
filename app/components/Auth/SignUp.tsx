'use client'
import React from 'react';
import ImageUrl from '@/public/images/chair.jpg';
import Image from 'next/image';
import { signIn } from 'next-auth/react';

const SignUpPage = () => {
  return (
    <div className='overflow-hidden h-[84vh] flex flex-col items-center justify-center'>
      <Image src={ImageUrl} alt='image' width={400} height={200}/>
      <button onClick={()=> {
        signIn('google',{callbackUrl: process.env.NEXT_PUBLIC_URL });
        }} 
        className='mt-8 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300'>
        Sign up
      </button>
    </div>
  );
}

export default SignUpPage;
