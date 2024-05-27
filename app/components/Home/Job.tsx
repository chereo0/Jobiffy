import React from 'react'
import Heading from '../Helper/Heading'
import JobCatCard from '../Helper/JobCatCard';

const Job = () => {
  return (
    <div className='pt-20 pb-12'>
      <Heading mainHeading="Popular Job Categories" subHeading="2024 Jobs Live - 293 added toady."/>
      <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[4rem] gap-[3rem] 
      items-center'>
        <JobCatCard image="/images/icon1.png" category="finance" openpos="23"/>
        <JobCatCard image="/images/icon2.png" category="Markting" openpos="23"/>
        <JobCatCard image="/images/icon3.png" category="Design" openpos="23"/>
        <JobCatCard image="/images/icon4.png" category="Development" openpos="23"/>
        <JobCatCard image="/images/icon5.png" category="Human resource" openpos="23"/>
        <JobCatCard image="/images/icon6.png" category="Automative Jobs" openpos="23"/>
        <JobCatCard image="/images/icon7.png" category="Customer Services" openpos="23"/>
        <JobCatCard image="/images/icon8.png" category="Health and Care" openpos="23"/>
        <JobCatCard image="/images/icon9.png" category="Project Mangment" openpos="23"/>
        </div>
    </div>
  )
};

export default Job