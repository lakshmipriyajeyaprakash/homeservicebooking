import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
const BusinessList = ({ businessList, title }) => {
    return (
      <div className='mt-5'>
            <h2 className="font-bold text-[22px]">{title}</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
            {businessList.length>0?businessList.map((business, index) => (
                <Link href={`/infos/${business.id}`} key={index} className='shadow-sm p-3 hover:shadow-lg hover:shadow-blue-200 cursor-pointer hover:scale-105 transition-all ease-in-out'>
                    <Image className='h-[150px] md:h-[200px] object-cover rounded-lg' src={business.images[0]?.url} height={300} width={300} alt='icon' />
                    <div className='mt-2 flex flex-col items-baseline px-3'>
                        <h2 className='p-2 bg-blue-50 text-primary rounded-full px-2 text-[12px]'>{business.category?.name}</h2>
                        <h2 className='font-bold text-[12px] text-blue-900'>{business.name}</h2>
                        <h2 className='text-[12px] text-blue-800'>{business.contactPerson}</h2>
                        <address className='text-[12px] text-gray-800'>{business.address}</address>
                        <Button className='mt-3 rounded-lg'>Book Now</Button>
                    </div>
                    
             </Link>
            )) : [1, 2, 3, 4, 5, 6].map((random, index) => (
                <div key={index} className='w-full h-[300px] bg-slate-200 rounded-lg animate-pulse'></div>
            ))} 
         </div>       
      </div>
  )
}

export default BusinessList