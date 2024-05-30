import React from 'react'
import Heading from '../Helper/Heading'
import JobData from '@/data'
import Link from 'next/link'
import JobCard from '../Helper/JobCard'

const FeautredJobs = () => {
  return (
    <div className='pt-20 pb-12'>
      <Heading 
      mainHeading="Feautred Jobs"
      subHeading="know your worth and find your job."/>
      <div className='mt-12 w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {JobData.map((job)=>{
            return <Link href={`/job/jobdetails/${job.id}`} key={job.id}>
                <JobCard job={job}/>
            </Link>
        })}
      </div>
      <Link href="/job/alljobs">
        <div className='text-center mt-[3rem]'>
          <button className=" px-8 py-3 inline-block border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors duration-300" >
            View All Job
          </button>
        </div>
      </Link>
      </div>
  )
}

export default FeautredJobs
