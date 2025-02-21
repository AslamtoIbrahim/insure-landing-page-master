'use client'
import React, { useState } from 'react'
import Navigator from './Navigator'
import MobileMenu from './MobileMenu'

const Header = () => {
    const [menuActive, setmenuActive] = useState(false);
    
    const toggleMenu = () => {
        setmenuActive(!menuActive);
    }
  return (
    <div className='transition-all duration-300 ease-in-out'>
      <Navigator click={toggleMenu} />
      {menuActive && <MobileMenu />}
    </div>
  )
}

export default Header
