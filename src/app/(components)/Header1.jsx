'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SlHandbag } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import Sidemenu from './Sidemenu';

function Header1() {

    const [isMenu, setMenu] = useState(false);
    return (
        <>
            <div className='flex justify-between lg:px-[10%] *:p-3 bg-[#f4ecec] sticky top-0 left-0 z-10'>
                <div className='flex-grow flex justify-between lg:justify-start items-center gap-8'>
                    <div>
                        <Image
                            src=
                            "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/retina-clothing2.png"
                            alt="BeClothing Logo"
                            unoptimized
                            priority={true}
                            width={180}
                            height={200}
                        />
                    </div>
                    <div className='lg:hidden'>
                        <div className='flex items-center gap-4 text-xl *:cursor-pointer'>
                            <SlHandbag />
                            <BsSearch />
                            <IoMenu className='text-2xl' onClick={() => { setMenu(!isMenu) }} />
                        </div>
                    </div>
                    <Sidemenu isMenu={isMenu} setMenu={setMenu}/>
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4 *:border-white *:border-b *:p-2 *:transition *:duration-0 *:hover:duration-300 text-[15px] text-[#575757] font-medium'>
                            <Link className='hover:border-black hover:text-black ' href={'/'}>
                                <li>Home</li>
                            </Link>
                            <Link className='hover:border-black hover:text-black ' href={'/about'}>
                                <li>About Us</li>
                            </Link>
                            <Link className='hover:border-black hover:text-black' href={'/shop'}>
                                <li>Shop</li>
                            </Link>
                            <Link className='hover:border-black hover:text-black' href={'/contact'}>
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='hidden lg:flex gap-4 items-center justify-around text-[#747474]'>
                    <div className='flex items-center gap-4 text-xl *:cursor-pointer'>
                        <SlHandbag />
                        <BsSearch />
                    </div>
                    <div className='flex items-center'>
                        <button className='text-[#747474] hover:bg-[#e2e2e2] flex items-center gap-2 p-3'>
                            My account
                            <FaAngleRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header1