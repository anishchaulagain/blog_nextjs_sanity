
import Link from 'next/link'
import React from 'react'
import { ThemeButton } from './ThemeButton'

const Navbar = () => {
  return (
    <div className='max-w-3xl mx-auto px-4 sm:px-4 lg:px-8'>
        <div className='flex justify-between h-16 mt-5'>
            <div className='flex justify-between items-center w-full '>
                <Link href='/'>
                    <h1 className=' font-bold text-2xl '>Anish<span className='text-teal-500'> Blog</span></h1>
                </Link>
                <ThemeButton/>
            </div>
        </div>
    </div>
  )
}

export default Navbar