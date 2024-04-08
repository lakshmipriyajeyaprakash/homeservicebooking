import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CategoryList = ({ categoryList }) => {
  return (
    <div className='mt-5 mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4'>
      {categoryList.length>0?categoryList.map((category, index) => (
        <Link href={`/find/${category.name}`} className={`flex flex-col items-center justify-center gap-2 bg-blue-50 p-5 
        rounded-lg cursor-pointer hover:scale-110 transition-all ease-in ease-out`} key={category.id}>
          <Image src={category.icon?.url} height={40} width={40} alt='icon'/>
          <h2 className='text-primary'>{category.name}</h2>
        </Link>)) : [1, 2, 3, 4, 5, 6].map(((random,index) => (
          <div key={index} className='h-[120px] w-full bg-slate-100 animate-pulse rounded-lg'></div>
        )))}</div>
  )
}

export default CategoryList