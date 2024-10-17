import Image from 'next/image'
import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { DM_Sans } from 'next/font/google';
const dmSens = DM_Sans({
    weight: '200',
    subsets: ['latin']
});
function Footer() {
    return (
        <div className='bg-[#f7e9e6] mt-[50px] md:m-0'>
            <div className="lg:w-[80%] mx-auto px-[20px] lg:p-0">
                <div className='py-[50px] lg:py-[100px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center lg:place-items-stretch '>
                    <div className='flex flex-col justify-evenly'>
                        <Image width="200" height='200' alt="" unoptimized src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/retina-clothing2.png" />
                        <div className={`${dmSens.className} flex items-center text-xl font-extralight gap-3`}>
                            <FaPhone />
                            <a href='mob:1234567890'> +61 (0) 383 766 284</a>
                        </div>
                        <div className={`${dmSens.className} flex items-center text-xl font-extralight gap-3`}>
                            <MdOutlineAttachEmail />
                            <a href='mailto:noreply@envato.com'>
                                noreply@envato.com
                            </a>
                        </div>
                        <Image width="200" height='200' unoptimized src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-footer-pic1.png" />
                    </div>
                    <div className='p-2'>
                        <h4 className='text-[16px] my-4 font-bold'>Delivery</h4>
                        <div>
                            <ul className='text-[#b59e8d] text-sm *:my-2 *:cursor-pointer list-disc'>
                                <li className='hover:underline'>How it Works</li>
                                <li className='hover:underline'>Free Delivery</li>
                                <li className='hover:underline'>FAQ</li>
                                <li className='hover:underline'>Payment methods</li>
                                <li className='hover:underline'>Delivery areas</li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h4 className='text-[16px] my-4 font-bold'>Customer service</h4>
                        <div>
                            <ul className='text-[#b59e8d] text-sm *:my-2 *:cursor-pointer list-disc'>
                                <li className='hover:underline'>Orders</li>
                                <li className='hover:underline'>Downloads</li>
                                <li className='hover:underline'>Addresses</li>
                                <li className='hover:underline'>Account details</li>
                                <li className='hover:underline'>Logout</li>
                                <li className='hover:underline'>Lost password</li>
                            </ul>
                        </div>
                    </div>
                    <div className='p-2'>
                        <h4 className='text-[16px] my-4 font-bold'>Useful links
                        </h4>
                        <div>
                            <ul className='text-[#b59e8d] text-sm *:my-2 *:cursor-pointer list-disc'>
                                <li className='hover:underline'>Contact us</li>
                                <li className='hover:underline'>Help & About us</li>
                                <li className='hover:underline'>Shipping & Returns</li>
                                <li className='hover:underline'>Refund Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border border-[rgb(0,0,0,0.1)]'></div>
            <div className={`${dmSens.className} lg:w-[80%] mx-auto  text-[rgb(149, 115, 105)] flex flex-col md:flex-row justify-between text-center py-5`}>
                <div>
                    © 2024 Betheme by <a href='https://github.com/nareshchoudharyy' target='_blank' className='hover:underline'>Naresh Choudhary</a> | All Rights Reserved | Powered by NextJs
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 *:cursor-pointer'>
                    <div className='hover:underline'>Terms and conditions</div>
                    <div className='hover:underline'>Privacy policy</div>
                    <div className='hover:underline'>Cookies</div>
                </div>
            </div>
        </div>
    )
}

export default Footer