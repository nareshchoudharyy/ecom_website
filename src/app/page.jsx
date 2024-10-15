"use client"
import Image from "next/image";
import HeroSection from "./(components)/HeroSection";
import Header1 from "./(components)/Header1";
import DealsBox from "./(components)/DealsBox";
import { FaChevronRight } from "react-icons/fa6";

import { Open_Sans } from 'next/font/google'
import Footer from "./(components)/Footer";
import Benifits2 from "./(components)/Benifits2";
import Head from "next/head";
const opensens = Open_Sans({ subsets: ['latin'] })
export default function Home() {
  const Deals = [
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8-300x300.jpg',
      title: 'Quisque lorem tortor',
      price: '£28.00'
    },
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic7-300x300.jpg',
      title: 'Curabitur et ligula',
      price: '£11.20'
    },
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic6-300x300.jpg',
      title: 'Etiam ullamcorper',
      price: '£12.00'
    },
    {
      bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic5-300x300.jpg',
      title: 'Nulla imperdiet sit amet',
      price: '£25.00'
    }
  ]
  const benifits = [
    {
      title: 'Always Free Shipping',
      image: "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon1.png",
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor'
    },
    {
      title: '14 day return policy',
      image: "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon2.png",
      desc: 'Nulla imperdiet sit amet magna vestibulum dapibus'
    },
    {
      title: 'Quick delivery in 48h',
      image: "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon3.png",
      desc: 'Nullam wisi ultricies gravida vitae dapibus risus'
    },
    {
      title: 'Online payment',
      image: "https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-home-icon4.png",
      desc: 'Lorem ipsum dolor sit amet mauris dolor bibendum sapien'
    }
  ]
  return (
    <>
      <Head>
        <title> Home </title>
      </Head>
      <div className={opensens.className}>
        <Header1 />
        <HeroSection />
        {/* weekly deals  */}
        <div className="">
          <div className="lg:w-[80%] mx-auto py-[40px] xl:py-[100px] ">
            <div className="lg:text-xl font-thin">
              Featured
            </div>
            <div className="text-[30px] xl:text-[60px]">
              Weekly Deals
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] my-[30px] md:my-[50px]">
              {
                Deals.map((value, index) => {
                  return <DealsBox bg={value.bg} title={value.title} price={value.price} key={index} />
                })
              }
            </div>
            <div className="flex items-center justify-around">
              <div className="bg-black text-white p-[10px_15px] flex items-center justify-between gap-3 cursor-pointer">
                See all products <span> <FaChevronRight /> </span>
              </div>
            </div>
          </div>
        </div>
        {/* about us  */}
        <div style={{ backgroundImage: ('url("https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-sectionbg1.jpg")') }} className="bg-cover bg-no-repeat bg-fixed md:py-[100px]">
          <h2 className="text-[30px] md:text-[60px] text-center md:font-thin sm:pb-5">
            Who we are
          </h2>
          <div className="md:w-[80%] mx-auto p-[20px] sm:p-[50px] lg:p-0 grid lg:grid-cols-2">
            <div>
              <Image src={'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-columnbg1.jpg'} width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} unoptimized />
            </div>
            <div className='bg-white text-center py-[50px] px-5 flex flex-col justify-center items-center gap-5'>
              <div className="font-bold text-3xl">
                Our story
              </div>
              <div className="text-xl md:text-2xl font-thin">
                In order to finance members. There was a certain ecological element of the eleifend, but it was just an ecological investment and it was big and big.
              </div>
              <div>
                Fusce ut velit laoreet, tempus arcu eu, molestie tortor. For even just a course, the palate needs the food, the eros needs. Maecenas was eleifend but just fringilla invest it and big eu, molestie tortor lorem eget egesta.
              </div>
              <div className="flex items-center justify-around">
                <div className="bg-black text-white p-[10px_15px] flex items-center justify-between gap-3 cursor-pointer">
                  See all products <span> <FaChevronRight /> </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Benifits with us  */}
        <div className="bg-white md:my-[100px]">
          <div className="lg:w-[80%] mx-auto grid lg:grid-cols-4 *:py-5">
            {
              benifits.map((item, index) => {
                return (
                  <div className="p-2 text-center max-w-[300px] mx-auto " key={index}>
                    <div>
                      <Image src={item.image} className="mx-auto" width={40} height={40} unoptimized />
                    </div>
                    <div className="font-thin text-2xl my-2">
                      {item.title}
                    </div>
                    <div className="">
                      {item.desc}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        {/* II part of banifits with us  */}
        <Benifits2 />
        {/* Footer  */}
        <Footer />
      </div>
    </>
  );
}