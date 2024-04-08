'use client'
import React,{ useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import GlobalApi from '@/app/_services/GlobalApi';
import { usePathname } from 'next/navigation'

const CategoryListSideBar = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const params = usePathname();
    useEffect(() => {
      getCategoryList();
    },[])
    /* Fetching Category Lists */
    const getCategoryList = () => {
      GlobalApi.getCategory().then((resp) => {
        setCategoryList(resp.categories);
      });
    };
    useEffect(() => { 
        params&&setSelectedCategory(params.split('/')[2]);
    },[params])
    
   
  return (
      <div>
          <h2 className='font-bold mb-3 text-lg text-primary'>Categories</h2>
          {categoryList.map((category, index) => (
              <Link href={`/find/${category.name}`} key={index} className=
                  {`flex gap-2 p-3 border rounded-lg mb-3 md:mr-3 cursor-pointer hover:bg-blue-100
          hover:text-slate-100 hover:border-primary hover:shadow-md items-center${selectedCategory==category.name&&'border-primary text-primary shadow-md bg-blue-100'}`}>
              <Image src={category.icon?.url} height={30} width={30} alt='icon'/>
          <h2 className='text-primary'>{category.name}</h2>
          </Link>
      ))
      }</div>
  )
}

export default CategoryListSideBar