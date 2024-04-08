import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { FaSearch } from "react-icons/fa";
const Hero = () => {
  return (
      <div className='flex flex-col items-center justify-center gap-2 mt-6'>
          <h2 className='font-bold text-[50px] text-center'>Locate Home <span className='text-primary'> Service/Repair</span><br></br>near you</h2>
          <h2 className='text-xl text-gray-400'>Discover Premier Home Services & Repairs</h2>
          <div className='mt-4 flex gap-3 items-center'>
              <Input placeholder="Search" className='rounded-full md:w-[400px]'></Input>
              <Button className='mt-1 rounded-full h-[30px]'>
                <FaSearch className='h-3 w-3'></FaSearch>
              </Button>
          </div>
    </div>
  )
}

export default Hero