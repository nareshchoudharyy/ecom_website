// "use client"
import Benifits2 from '@/app/(components)/Benifits2'
import Footer from '@/app/(components)/Footer'
import Header1 from '@/app/(components)/Header1'
import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdAttachEmail } from 'react-icons/md'
function page() {
    return (
        <>
            <Header1 />
            <div className="bg-[url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-subheader1.jpg')] bg-no-repeat bg-contain " style={{ backgroundPosition: 'center center', backgroundSize: '100%' }} >
                <div className="px-5 lg:w-[80%] mx-auto py-[20px] md:pt-[100px] md:pb-[80px] text-[30px] text-center lg:text-left lg:text-[60px]">
                    Contact with us
                </div>
            </div>
            <div className='lg:w-[80%] mx-auto my-[30px] md:my-[50px] grid gap-5 lg:gap-0 grid-cols-1 lg:grid-cols-3 lg:my-[100px] text-center '>
                <div className='grid gap-5 lg:text-left'>
                    <div className='text-xl md:text-3xl'>
                        <div className='text-sm'>Our Address</div>
                        Level 13, 2 Elizabeth St,
                        Melbourne, Victoria 3000,
                        Australia
                    </div>
                </div>
                <div className='grid'>
                    <div>
                        <div className='text-xl md:text-2xl'>Monday - Friday</div>
                        <div className='text-xs md:text-base'>08:00 AM — 10:00 PM</div>
                    </div>
                    <div>
                        <div className='text-xl md:text-2xl'>Monday - Friday</div>
                        <div className='text-xs md:text-base'>08:00 AM — 10:00 PM</div>
                    </div>
                </div>
                <div className='lg:text-right grid'>
                    <div className='text-base sm:text-2xl'>Do you have any questions?</div>
                    <div className='font-bold'> <a href="tel:+61(0)383766284"><FaPhoneAlt className='inline' /> +61 (0) 383 766 284</a></div>
                    <div className='font-bold'> <a href="mailto: noreply@envato.com"><MdAttachEmail className='inline' /> noreply@envato.com</a></div>
                </div>
            </div>
            <div className='bg-[#f7e9e6] flex flex-col justify-center py-[30px] lg:py-[100px] my-[30px] md:my-[50px] h-screen md:h-auto'>
                <div className='text-center text-2xl font-bold my-5'>
                    Need a quick help?
                </div>
                <form action="">
                    <div className='grid grid-cols-1 gap-5 w-[90%] sm:w-[80%] md:max-w-[50%] mx-auto text-center *:p-[5px_10px] *:rounded-[0px_0px_10px_0px] '>
                        <input type="text" placeholder='Name' />
                        <input type="mail" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea name="subject" id="" placeholder='Message'></textarea>
                    </div>
                </form>
            </div>
            <Benifits2 />
            <Footer />
        </>
    )
}
export default page