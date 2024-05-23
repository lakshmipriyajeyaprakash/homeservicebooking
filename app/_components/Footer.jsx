import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='m-20 flex justify-center items-center'>
      <Image src='logo.svg' height={25} width={25} alt='logo'></Image>
      <h6>&#169;2024 www.homeservices.com. All rights reserved.</h6>
    </div>
  )
}

export default Footer