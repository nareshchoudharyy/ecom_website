'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
const roboto = Roboto({
    weight: '300',
    subsets: ['latin']
});

function HeroSection() {
    const [sliders, setSliders] = useState([
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic1-1.jpg'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic5.jpg'
        }
    ]);
    return (
        <>
            <div style={{ backgroundImage: `url('${sliders[1].bg}')` }} className="min-h-[100vh] bg-cover bg-no-repeat bg-center">
                <div className="xl:w-[90%] mx-auto">
                    <div className=' flex justify-between items-center relative'>
                        <div className='flex justify-start items-center gap-10 my-[100px] ms-[5%] lg:ms-[100px]'>
                            <div className='flex flex-col gap-5'>
                                <Image
                                    src=
                                    "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-arrow1.png"
                                    alt="External Image"
                                    unoptimized
                                    width={25}
                                    height={40}
                                />
                                <Image
                                    src=
                                    "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-arrow2.png"
                                    alt="External Image"
                                    unoptimized
                                    width={25}
                                    height={40}
                                />
                            </div>
                            <div className={roboto.className} >
                                <div className='text-xl md:text-2xl'>
                                    <div className='text-[28px] flex items-center gap-5'>
                                        2020
                                        <div className='w-[100px] border-b border-black'>
                                        </div>
                                    </div>
                                    <div className=' text-[50px] md:text-[70px] leading-[70px]'>
                                        Summer
                                    </div>
                                    <div className=' text-[50px] md:text-[70px] leading-[70px]'>
                                        Collection
                                    </div>
                                    <div className='text-[13px] font-bold'>
                                        SUMMER SALE | UP TO 50% OFF
                                    </div>
                                </div>
                                <div className='bg-black text-white text-sm rounded-[0px_0px_20px_0px] text-center p-3 my-5 inline-block'>
                                    <Link href='/shop' >Our Collection</Link>
                                </div>
                            </div>
                        </div>
                        <div className='m-[0px_100px_50px_0px] hidden lg:block'>
                            <Image
                                src=
                                "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic4.png"
                                alt="External Image"
                                unoptimized
                                width={150}
                                height={200}
                            />
                        </div>
                        <div className="absolute top-[250px] right-[200px] hidden lg:block" >
                            <Image
                                src=
                                "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic2.jpg"
                                alt="External Image"
                                unoptimized
                                width={200}
                                height={40} />
                        </div>
                        <div className="absolute top-[180px] right-[-10px] hidden lg:block" >
                            <Image
                                src=
                                "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-slider-pic3.jpg"
                                alt="External Image"
                                unoptimized
                                width={200}
                                height={40} />
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default HeroSection