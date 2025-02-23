import React from 'react'
import Image from "next/image";
import logo from "../../public/sources/images/logo.svg";

const Logo = () => {
  return (
    <div>
      <Image src={logo} alt="Logo" width={112} height={18} />
    </div>
  )
}

export default Logo
