// "use client"
import Benifits2 from '@/app/(components)/Benifits2'
import Footer from '@/app/(components)/Footer'
import Header1 from '@/app/(components)/Header1'
import Head from 'next/head'
import React from 'react'
function page() {
    return (
        <>
            <Head>
                <title> Contact Us </title>
            </Head>
            <Header1 />
            <div className="bg-[url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-subheader1.jpg')] bg-no-repeat bg-contain " style={{ backgroundPosition: 'center center', backgroundSize: '100%' }} >
                <div className="px-5 lg:w-[80%] mx-auto md:pt-[100px] md:pb-[80px] text-[60px]">
                    Contact with us
                </div>
            </div>
            <Benifits2 />
            <Footer />
        </>
    )
}
export default page