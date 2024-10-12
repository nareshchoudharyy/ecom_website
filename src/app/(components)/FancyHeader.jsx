import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SlHandbag } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa6";
import { FaPhone } from 'react-icons/fa';
import { MdOutlineAttachEmail } from 'react-icons/md';

function FancyHeader() {
  return (
    <>
      <div className='text-md text-white py-4 flex items-center gap-5 *:flex *:items-center *:justify-center *:gap-1'>
        <div>Help Desk 24/7</div>
        <div>
          <FaPhone />
          <a href='mob:1234567890'> +61 (0) 383 766 284</a>
        </div>
        <div>
          <MdOutlineAttachEmail />
          <a href='mailto:noreply@envato.com'>
            noreply@envato.com
          </a>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='bg-white w-[74%] flex after:content-[""] after:bg-[#e3e3e3] after:relative after:right-[-11px] after:bottom-[4px] after:w-[1.5%] after:skew-y-[-40deg]'>
          <div className='flex p-6 gap-8 items-center w-[100%]'>
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
            <div>
              <ul className='flex items-center gap-4 *:border-white *:border-b *:p-2 *:transition *:duration-0 *:hover:duration-300 text-[15px] text-[#747474]'>
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
        </div>
        <div className='bg-white p-6 flex gap-4 items-center justify-around w-[25%] relative bottom-2 text-[#747474]'>
          <div className='flex items-center gap-4 text-xl'>
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
export default FancyHeader