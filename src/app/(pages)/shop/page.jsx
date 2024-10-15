// "use client"
import Benifits2 from '@/app/(components)/Benifits2'
import DealsBox from '@/app/(components)/DealsBox'
import Footer from '@/app/(components)/Footer'
import Header1 from '@/app/(components)/Header1'
import React from 'react'


function page() {
    const products = [
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8-300x300.jpg',
            title: 'Aliquam erat ac ipsum',
            price: '£24.00'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic7-300x300.jpg',
            title: 'Aliquam sem',
            price: '£16.00'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic6-300x300.jpg',
            title: 'Curabitur et ligula',
            price: '£11.20'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic5-300x300.jpg',
            title: 'Etiam ullamcorper',
            price: '£12.00'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8-300x300.jpg',
            title: 'Lorem ipsum dolor sit amet',
            price: '£12.50'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic7-300x300.jpg',
            title: 'Nulla imperdiet sit amet',
            price: '£25.00'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic5-300x300.jpg',
            title: 'Etiam ullamcorper',
            price: '£12.50'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8-300x300.jpg',
            title: 'Quisque cursus et porttitor risus',
            price: '£17.00'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic7-300x300.jpg',
            title: 'Quisque lorem tortor',
            price: '£26.00'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic6-300x300.jpg',
            title: 'Quisque lorem tortor',
            price: '£28.00'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic5-300x300.jpg',
            title: 'Quisque lorem tortor',
            price: '£70.00'
        },
        {
            bg: 'https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic6-300x300.jpg',
            title: 'Vestibulum dapibus',
            price: '£32.00'
        }
    ]
    return (
        <>
            <Header1 />
            <div className="bg-[url('https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-subheader1.jpg')] bg-no-repeat bg-contain " style={{ backgroundPosition: 'center center', backgroundSize: '100%' }} >
                <div className="px-5 lg:w-[80%] mx-auto py-[20px] md:pt-[100px] md:pb-[80px] text-[30px] text-center lg:text-left lg:text-[60px]">
                    Shop
                </div>
            </div>
            <div>
                <div className='lg:w-[80%] mx-auto my-[50px]'>
                    {/* sorting */}
                    <div className='flex justify-between text-xs p-[10px]'>
                        <div>
                            Showing all 12 products
                        </div>
                        <div>
                            <select id='sorting' name='sorting'>
                                <option value="Men">Men</option>
                                <option value="Men">Women</option>
                                <option value="Men">Boys</option>
                                <option value="Men">Girls</option>
                                <option value="Men">Children</option>
                            </select>
                        </div>
                    </div>
                    {/* boxes */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px] grid-flow-row'>
                        {
                            products.map((value, index) => {
                                return <DealsBox bg={value.bg} title={value.title} price={value.price} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default page