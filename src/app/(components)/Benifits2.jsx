import Image from 'next/image';
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

function Benifits2() {
    return (
        <div className="bg-white md:my-[100px]">
            <div className="lg:w-[80%] mx-auto grid place-items-center sm:grid-cols-3">
                <div className=" max-w-[406px]">
                    <Image src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-wrapbg1.jpg'} width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} unoptimized />
                </div>
                <div className="flex flex-col justify-center py-[50px] md:p-0 gap-3 sm:gap-5 items-center bg-[#edd8ab] max-w-[406px] w-full h-full">
                    <div className="text-[20px] lg:text-[40px]">GET 20% OFF</div>
                    <div className="text-[16px] lg:text-[20px]">Fusce dolor velit laoreet</div>
                    <div className="flex items-center justify-around">
                        <div className="bg-black text-white p-[10px_15px] flex items-center justify-between gap-3 cursor-pointer">
                            Learn More <span> <FaChevronRight /> </span>
                        </div>
                    </div>
                </div>
                <div className=" max-w-[406px]">
                    <Image src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-wrapbg2.jpg'} width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }} unoptimized />
                </div>
            </div>
        </div>
    )
}

export default Benifits2