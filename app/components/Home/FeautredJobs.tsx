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
      </div>
  )
}

export default FeautredJobs
