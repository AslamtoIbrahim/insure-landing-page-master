import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter } from 'react-icons/io'

const SocialIcons = () => {
  return (
    <div className='flex items-center gap-4 '>
      <IoLogoFacebook className='text-neutral-darkGrayishViolet text-2xl icon' />
      <IoLogoTwitter className='text-neutral-darkGrayishViolet text-2xl icon' />
      <IoLogoPinterest className='text-neutral-darkGrayishViolet text-2xl icon' />
      <IoLogoInstagram className='text-neutral-darkGrayishViolet text-2xl icon' />
    </div>
  )
}

export default SocialIcons
