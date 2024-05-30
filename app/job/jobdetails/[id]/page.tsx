import ApplyButton from '@/app/components/Helper/ApplyButton'
import JobCard from '@/app/components/Helper/JobCard'
import { authOptions } from '@/auth'
import JobData from '@/data'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import React from 'react'

const page = async ({params}:{params:{id:string}}) => {
   const singleJob =JobData.find ((job) => job.id.toString() == params.id) 
    const FirstFourJob= JobData.slice(0,4);
   const session = await getServerSession(authOptions)
    return (
    <div className='mt-20 mb-12'>
      <div className='block sm:flex items-center justify-between w-[80%] mx-auto'>
        <div className='flex-[0.7]'>
        <JobCard job={singleJob!}/>
        </div>
        {session && <ApplyButton/>}
        {!session && (
            <Link href='/signup'>
                <button className='inline-block px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300'>
                    Sign Up To Apply
                </button>
            </Link>
        )} 
      </div>
      <div className='mt-16 w-[80%] mx-auto'>
        <h1 className='text-[20px] font-semibold'>Job Description</h1>
        <p className='mt-4 text-black text-opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. B
            eatae eaque alias aperiam numquam minima ea neque cumque nobis cupiditate nesciunt. Vol
            uptate officia doloremque quas optio numquam quam assumenda, amet repellendus explicabo cum debitis elig
            endi deserunt, delectus illum at cupiditate eius hic perspiciatis quos consequ
            atur, expedita rem eos neque distinctio? Illum!</p>
            <h1 className='text-[20px] mt-8 font-semibold'>Key Resbonalties</h1>
        <p className='mt-4 text-black text-opacity-70'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. B
            eatae eaque alias aperiam numquam minima ea neque cumque nobis cupiditate nesciunt. Vol
            uptate officia doloremque quas optio numquam quam assumenda, amet repellendus explicabo cum debitis elig
            endi deserunt, delectus illum at cupiditate eius hic perspiciatis quos consequ
            atur, expedita rem eos neque distinctio? Illum!</p>
            <h1 className='text-[20px] mt-8 font-semibold'>Skills</h1>
            <ul>
                <li className=' mt-4 text-black text-opacity-70'>React js</li>
                <li className=' mt-4 text-black text-opacity-70'>Next js</li>
                <li className=' mt-4 text-black text-opacity-70'>Typescript </li>
                <li className=' mt-4 text-black text-opacity-70'>Twailned css</li>
                <li className=' mt-4 text-black text-opacity-70'>PhP</li>
            </ul>
            <h1 className='text-[20px] mt-8 font-semibold'>Related job</h1>
            <div className='mt-4'>
            {
                FirstFourJob.map((job)=>{
                    return (
                        <Link href={`/job/jobdetails/${job.id}`} className='space-y-6' key={job.id}>
                            <JobCard job={job}/>
                        </Link>
                    );
                })
            }
        </div>
      </div>
    </div>
  )
}

export default page
