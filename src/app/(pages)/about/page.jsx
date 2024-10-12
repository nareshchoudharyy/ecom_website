"use client"
import Benifits2 from '@/app/(components)/Benifits2'
import Footer from '@/app/(components)/Footer'
import Header1 from '@/app/(components)/Header1'
import { DM_Sans, Raleway } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6'
const dm_sens = DM_Sans({
    subsets: ['latin']
})

const raleway = Raleway({ subsets: ['latin'] })
function page() {
    return (
        <>
            <Header1 />
            <div className="bg-[url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-subheader1.jpg')] bg-no-repeat bg-contain " style={{ backgroundPosition: 'center center', backgroundSize: '100%' }} >
                <div className="px-5 lg:w-[80%] mx-auto md:pt-[100px] md:pb-[80px] text-[60px]">
                    About us
                </div>
            </div>
            <div className="px-5 lg:p-0 lg:w-[80%] mx-auto md:my-[50px]">
                <div className='text-[30px] md:text-[40px] lg:text-[60px] md:w-[70%] py-5 md:px-5 font-thin'>
                    Mauris Maximus wants to benefit from a variety of legal consequences.
                    <div className='text-[10px]' >
                        LONDON, UK
                    </div>
                </div>
                <div className='grid grid-cols-5 grid-flow-row  md:my-[50px]'>
                    <div className='col-span-5 md:col-span-2'>
                        <div className={`${raleway.className} text-xl`}>
                            But basketball players want to play football. Now who is the big one? There was a smile on his face, whether it was simple or pure, for it was the gate of the estate.
                        </div>
                        <div className={`${dm_sens.className} text-md my-5`}>
                            The house is the ferment of the throat, but the vehicles are the members of life. Mauris mollis pobortis turpis, needs a layer before any one. For the corporal body is the time of life. I chatted as a doctor from a hospital in Ultricies. The biggest advantage of the game is the game, the game or the game
                        </div>
                        <div className=' text-2xl font-bold my-5'>
                            Some frills
                        </div>
                        <div className={`${raleway.className} text-xl`}>
                            I chatted just like I needed to, before the life of the employee. Completely fine, good value for money.
                        </div>
                        <div className={`${dm_sens.className} text-md my-5`}>
                            The author is wise. In pulvinar, football is very easy to dignissim, the mass is just different pure, it is not said elite nibh as mass. For there was a mass, and the trucks were made of football, arrows, and horses. If the children want pain, they will take it in the ligula.
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-3" >
                        <Image src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-about-pic1.jpg'} width={0}
                            height={0}
                            sizes="100vw" style={{ width: '80%', height: 'auto' }} unoptimized className="mx-auto" />
                    </div>
                </div>
            </div>
            <div className='lg:w-[80%] py-5 lg:py-0 mx-auto my-[50px] grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 *p-3 *:sm:p-5 *:md:p-[50px] text-center bg-[#f7e9e6]'>
                <div>
                    <div className='text-[60px] font-bold'>25</div>
                    <div className='text-[20px] '>Years in Industry</div>
                </div>
                <div>
                    <div className='text-[60px] font-bold'>49</div>
                    <div className='text-[20px] '>Country Covered</div>
                </div>
                <div>
                    <div className='text-[60px] font-bold'>5+</div>
                    <div className='text-[20px] '>Millons Happy Customers</div>
                </div>
                <div>
                    <div className='text-[60px] font-bold'>50+</div>
                    <div className='text-[20px] '>Millons Products Listed</div>
                </div>
            </div>
            <Benifits2 />
            <Footer/>
        </>
    )
}
export default page