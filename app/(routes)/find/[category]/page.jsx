'use client'
import React, { useEffect,useState } from 'react'
import GlobalApi from '@/app/_services/GlobalApi'
import BusinessList from '@/app/_components/BusinessList'

const BusinessCategory = ({ params }) => {
  const [businesslist, setBusinessList] = useState([]);
  useEffect(() => {
    params && getBusinessByCategory();
  },[params])
  const getBusinessByCategory = () => {
    GlobalApi.getBusinessByCategory(params.category).then((resp => {
      console.log(resp);
      setBusinessList(resp?.businessLists);
    }))
  }
  return (
    <div><BusinessList title={params.category.name} businessList={businesslist} /></div>
  )
}

export default BusinessCategory