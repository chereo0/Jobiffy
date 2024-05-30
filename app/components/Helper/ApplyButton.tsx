'use client'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const ApplyButton = () => {
 const applyHandler = () => toast.success("Application Success!");
    return (
    <div>
      <button onClick={applyHandler} className='inline-block px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300'>
      Apply Now
      </button>
      <ToastContainer position='top-center' />
    </div>
  )
}

export default ApplyButton
