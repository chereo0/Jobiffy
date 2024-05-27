import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaFacebookF, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-[5rem] pb-[3rem] bg-[#111111]'>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[3rem] 
      items-start pb-[2rem] border-b-2 border-white border-opacity-10'>
        <div>
            <h1 className='text-[24px] text-white mb-[1rem] font-bold uppercase'>Jobifyy</h1>
            <p className='text-[14px] text-white text-opacity-80'> 
            Jobifyy is your place to find your job Explore the categories</p>
        
        <div className='mt-[1.5rem] flex items-center space-x-3'>
          <div className='w-[2.4rem] h-[2.4rem] bg-blue-600 rounded-full flex items-center justify-center flex-col'>
            <FaFacebookF className='text-white'/>
          </div>
          <div className='w-[2.4rem] h-[2.4rem] bg-sky-400 rounded-full flex items-center justify-center flex-col'>
            <FaTwitter className='text-white'/>
          </div>
          <div className='w-[2.4rem] h-[2.4rem] bg-red-400 rounded-full flex items-center justify-center flex-col'>
            <FaInstagram className='text-white'/>
          </div>
          <div className='w-[2.4rem] h-[2.4rem] bg-red-600 rounded-full flex items-center justify-center flex-col'>
            <FaYoutube className='text-white'/>
          </div>
          </div>
        </div>
        <div>
          <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>About us</h1>
          <p className='text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Job</p>
          <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Privacy</p>
          <p className='text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Police</p>
          <p className='text-[15px] w-fit text-white hover:text-green-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Application</p>
          <p className='text-[15px] w-fit text-white hover:text-purple-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Catogries</p>
        </div>
        <div>
          <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>Quick Link</h1>
          <p className='text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>All Job</p>
          <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Job Deatials</p>
          <p className='text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>How To Apply</p>
          <p className='text-[15px] w-fit text-white hover:text-green-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Resume</p>
        </div>
        <div>
          <h1 className='text-[22px] w-fit text-white font-semibold mb-[1.5rem]'>Get in Touch</h1>
          <p className='text-[15px] w-fit text-white hover:text-blue-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>+012 234698</p>
          <p className='text-[15px] w-fit text-white hover:text-red-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Jobbify.job@.aus.com</p>
          <p className='text-[15px] w-fit text-white hover:text-yellow-500 cursor-pointer text-opacity-30 mb-[0.7rem]'>Austrlia.Sydney</p>
        </div>
      </div>
      <h1 className='mt-[2rem] text-[14px] w-[80%] mx-auto text-white opacity-50'>COPYRIGHT BY JOBIFYY-2024</h1>
    </div>
  )
}

export default Footer
