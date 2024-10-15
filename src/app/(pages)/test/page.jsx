import React from 'react'
import { RxCross1 } from "react-icons/rx";
import { FaAngleRight } from 'react-icons/fa6'
import { IoBagHandle } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';

function page() {
    return (
        <>
            <div className='w-full h-screen bg-black text-white md:hidden'>
                <div className='text-xl text-right p-[10px]'>
                    <RxCross1 className='inline cursor-pointer' />
                </div>
                <div className='w-[90%] max-w-[150px] mx-auto my-[15px] text-center p-[5px_10px] bg-white text-[rgb(116,116,116)] cursor-pointer'>
                    My Account <FaAngleRight className='inline' />
                </div>
                <div className='flex justify-center gap-5 my-[15px] text-[30px] text-center *:cursor-pointer'>
                    <IoBagHandle />
                    <IoSearch />
                </div>
                <div className='*:p-[5px_15px] *:border-t *:border-[#747474]'>
                    <div>
                        <Link href={'/'}>Home</Link>
                    </div>
                    <div>
                        <Link href={'/about'}>About Us</Link>
                    </div>
                    <div>
                        <Link href={'/shop'}>Shop</Link>
                    </div>
                    <div className='border-b border-[#747474]'>
                        <Link href={'/contact'}>Contact</Link>
                    </div>
                </div >
            </div >
        </>
    )
}

export default page