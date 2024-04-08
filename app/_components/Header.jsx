'use client'
import React,{useEffect} from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link  from 'next/link'

const Header = () => {
    /* Fetching user sign in details for the user profile */
    const { data }   = useSession();
    useEffect(() => {
        
    },[data])
    return (
        <div className='p-5 shadow-sm flex items-center gap-8 justify-between '>
        <div className='p-5 flex items-center gap-8'>
            <Image src='/logo.svg' alt='logo' width={40} height={50} />
            <div className='md:flex items-center gap-6 hidden'>
                    <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-auto transition-colors'>Home</Link>
                <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-auto transition-colors'>Services</Link>
                    <Link href={'/'} className='hover:scale-105 hover:text-primary cursor-auto transition-colors'>About us</Link>
            </div>
        </div>
            <div>
                {data?.user ?
                   <DropdownMenu>
                        <DropdownMenuTrigger asChild='true'>
                            <Image width={40} height={40} className='rounded-full' src={data?.user?.image} alt="userImage" />
                        </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><Link href={`/myschedule`}>My Schedules</Link></DropdownMenuItem>
    <DropdownMenuItem onClick={()=>signOut()}>Logout</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
                :<Button onClick={() => signIn('descope')}>Login/Signup</Button>}
            </div>
            
        </div>
  )
}

export default Header