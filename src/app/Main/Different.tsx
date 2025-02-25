import React from 'react'
import {features} from '../data'
import Feature from './Feature';

const Different = () => {
  return (
    <div className='px-6 py-24 flex flex-col items-center gap-8 md:items-start md:gap-10 
    lg:px-16 xl:px-32 lg:py-28 xl:py-40 xl:gap-16'>
      <hr className='border-primary-darkViolet/40 w-1/2 md:w-1/4
       ' />
      <h1 className='text-4xl text-primary-darkViolet font-dmSerif md:text-5xl 
      lg:text-6xl'>We’re different</h1>
      <div className='flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-16 md:flex-row md:items-start'>
        {features.map((item, i)=>{
            return (
                <Feature key={i} features={item} />
            );
        })}
      </div>
    </div>
  )
}

export default Different
