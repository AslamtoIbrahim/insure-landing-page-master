import React from 'react'
import {features} from '../data'
import Feature from './Feature';

const Different = () => {
  return (
    <div className='px-6 py-24 flex flex-col items-center gap-8 '>
      <hr className='border-primary-darkViolet/40 w-1/2 ' />
      <h1 className='text-4xl text-primary-darkViolet font-dmSerif'>We’re different</h1>
      <div className='flex flex-col gap-4'>
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
