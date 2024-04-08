import React from 'react'
import CategoryListSideBar from './_components/CategoryListSideBar';

const layout = ({ children }) => {
 
  return (
    <div><div className='grid grid-cols-1 md:grid-cols-4 mt-6'>
    {/* Sidebar div */ }
      <div className='grid col-span-1'><div className='hidden md:block'><CategoryListSideBar /></div></div>
      {/* BusinessList div*/}
      <div className='grid md:col-span-3'>{children}</div>
    </div></div>
  )
}

export default layout