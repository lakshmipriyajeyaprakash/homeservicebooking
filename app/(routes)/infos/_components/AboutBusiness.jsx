import React from 'react'
import Image from 'next/image'
import { MdOutlineMailOutline } from 'react-icons/md';
import { FiMapPin } from 'react-icons/fi';
import { MdOutlineIosShare } from 'react-icons/md';
import { Button } from '@/components/ui/button';
import { CiUser } from 'react-icons/ci';
import { FaRegClock } from 'react-icons/fa';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
const AboutBusiness = ({ businessDetail }) => {
  console.log(businessDetail);
  return (
    <div className='md:flex gap-4 items-center'>
      {businessDetail?.name && <Image src={businessDetail?.images[0]?.url} height={200} width={150} className='rounded-full h-[150px] 
      object-cover' alt='businessicon' />}
      <div className='flex justify-between items-center w-full gap-10'>
      <div className='flex flex-col items-baseline mt-4 md:mt-0 items-center'>
        <h2 className='text-primary bg-blue-100 rounded-full p-1 px-2 text-lg'>{businessDetail?.category?.name}</h2>
          <h2 className='text-[30px] font-bold'>{businessDetail?.name}</h2>
          <h2 className='flex gap-2 text-lg text-primary'><CiUser className='mt-1'></CiUser>{businessDetail.contactPerson}</h2>
         
        <h2 className='mt-1 flex gap-2 text-md text-gray-500'>
          <FiMapPin className='mt-1'/>{businessDetail?.address}</h2>
          <h2 className='mt-1 flex gap-2 text-md text-gray-500'>
            <MdOutlineMailOutline className='mt-1' />{businessDetail?.email}</h2>
            <h2 className='flex gap-2 text-md text-gray-500'><FaRegClock className='mt-1'></FaRegClock>Available 10.00AM to 06.30PM</h2>
        </div>
        {/* <div className='flex flex-col gap-5 items-end mt-4'> 
          <Button><MdOutlineIosShare /></Button>
          <h2 className='flex gap-2 text-xl text-primary'><CiUser className='mt-1'></CiUser>{businessDetail.contactPerson}</h2>
          <h2 className='flex gap-2 text-xl text-gray-500'><FaRegClock className='mt-1'></FaRegClock>Available 10.00AM to 06.30PM</h2>
  </div>*/}
        </div>
    </div >
  )
}

export default AboutBusiness