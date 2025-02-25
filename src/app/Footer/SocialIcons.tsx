import React from 'react'
import { IoLogoFacebook, IoLogoInstagram, IoLogoPinterest, IoLogoTwitter } from 'react-icons/io'

const SocialIcons = () => {
  return (
    <div className='flex items-center gap-4 '>
      <IoLogoFacebook className='icondesing icon' />
      <IoLogoTwitter className='icondesing icon' />
      <IoLogoPinterest className='icondesing icon' />
      <IoLogoInstagram className='icondesing icon' />
    </div>
  )
}

export default SocialIcons
