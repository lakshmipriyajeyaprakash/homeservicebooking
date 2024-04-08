import React, { useState, useEffect } from 'react'
import GlobalApi from '@/app/_services/GlobalApi';
import { Button } from '@/components/ui/button'
import { GiNotebook } from 'react-icons/gi';
import Image from 'next/image'
import Link from 'next/link'
import Schedule from './Schedule';

const PrescribedBusiness = ({ businessDetail }) => {
  console.log(businessDetail);
  const [businesslist, setBusinessList] = useState([]);
  useEffect(() => {
    businessDetail && getBusinessByCategory();
  },[businessDetail])
  const getBusinessByCategory = () => {
    GlobalApi.getBusinessByCategory(businessDetail?.category?.name).then((resp => {
    setBusinessList(resp?.businessLists);
    }))
  }
  return (
    <div className='md:pl-10'>
      <Schedule businessDetail={businessDetail}>
          <Button className='flex gap-2 '><GiNotebook />
            Book Appointment
            </Button>
      </Schedule>
      <div className='hidden md:block'>
      <h2 className='font-bold text-lg mt-3 mb-3 sm:hidden md:block'>Available Job</h2>
      <div className='flex flex-col'>
        {businesslist && businesslist.map((business, index) => (
          <Link key={index} href={`/infos/${business.id}`} className='flex flex-col gap-2 hover:border rounded-lg cursor-pointer p-2 border-blue-200 shadow-sm w-52'>
            <Image key={index} src={business?.images[0].url} height={80} width={80} alt='Similar Job Images' className='rounded-lg object-cover' />
            <div className=''>
            <h2 className='font-bold'>{business.name}</h2>
            <h2 className='font-bold text-blue-800'>{business.contactPerson}</h2>
            <h2 className='text-primary'>{business.address}</h2>
              <h2 className='text-gray-400'>{business.email}</h2>
              </div>
          </Link>
        ))}
        </div>
        </div>
    </div>
  )
}

export default PrescribedBusiness