import React, { useEffect, useState } from "react";
import '../index.css'
import { data_myntra, data_amazon , data_flipcart } from "./data";
import { NavLink } from 'react-router-dom';
function Allproducts() {
    const [myntra, setMyntra] = useState([]);
    const [amazon, setAmazon] = useState([]);
    const [flipcart, setFlipcart] = useState([]);
    useEffect(() => {
        setMyntra(data_myntra)
        setAmazon(data_amazon)
        setFlipcart(data_flipcart)
    })
  return (
    <>
{/* <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
  <div className="relative m-3 flex flex-wrap mx-auto justify-center">

    <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"/>
        <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </p>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">Product Name</p>
          <p className="text-md text-gray-800 mt-0">$340</p>
        </div>
        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </div>

    <div className="relative max-w-sm min-w-[340px] bg-white shadow-md rounded-3xl p-2 mx-1 my-3 cursor-pointer">
      <div className="overflow-x-hidden rounded-2xl relative">
        <img className="h-40 rounded-2xl w-full object-cover" src="https://pixahive.com/wp-content/uploads/2020/10/Gym-shoes-153180-pixahive.jpg"/>
        <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </p>
      </div>
      <div className="mt-4 pl-2 mb-2 flex justify-between ">
        <div>
          <p className="text-lg font-semibold text-gray-900 mb-0">Product Name</p>
          <p className="text-md text-gray-800 mt-0">$340</p>
        </div>
        <div className="flex flex-col-reverse mb-1 mr-4 group cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="gray">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </div>
      </div>
    </div>

  </div>
</div> */}


<div tabIndex="0" className="focus:outline-none bg-[#f7f7f7]">
            <div className="mx-auto container py-8">
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                {myntra?.map((data)=>(
                    <div key={data.title} tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8 mt-8">
                    <NavLink to={data.title}> <div className="w-full h-[200px] flex items-center justify-center bg-white">
                        <img alt="person capturing an image" src={data.images.split(',')[0]} tabIndex="0" className="focus:outline-none object-contain max-w-full max-h-full" />
                    </div>
                    </NavLink>
                    <div className="bg-white">
                        <div className="flex items-center justify-between px-4 pt-4">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                </svg>
                            </div>
                            <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Featured</p>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="flex items-center">
                            <NavLink to={data.title}> <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">{data.title.split(' ').slice(0, 2).join(' ')}</h2></NavLink>
                                <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">Price: {data.price} $</p>
                            </div>
                            <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 mt-2">{data.title.split(' ').slice(0, 7).join(' ')}</p>
                            <div className="flex mt-4">
                                <div>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                </div>
                                <div className="pl-2">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
                </div>
                {/* <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
                    <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="girl texting" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">iphone XS</h2>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                                </div>
                                <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                <div className="flex mt-4">
                                    <div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                    </div>
                                    <div className="pl-2">
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="girl texting" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">iphone XS</h2>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                                </div>
                                <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                <div className="flex mt-4">
                                    <div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                    </div>
                                    <div className="pl-2">
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="girl texting" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">iphone XS</h2>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                                </div>
                                <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                <div className="flex mt-4">
                                    <div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                    </div>
                                    <div className="pl-2">
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
                        <div>
                            <img alt="girl texting" src="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png" className="focus:outline-none w-full h-44" />
                        </div>
                        <div className="bg-white">
                            <div className="flex items-center justify-between px-4 pt-4">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" tabIndex="0" className="focus:outline-none" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                                    </svg>
                                </div>
                                <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                                    <p tabIndex="0" className="focus:outline-none text-xs text-yellow-700">Featured</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="flex items-center">
                                    <h2 tabIndex="0" className="focus:outline-none text-lg font-semibold">iphone XS</h2>
                                    <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 pl-5">4 days ago</p>
                                </div>
                                <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 mt-2">The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos</p>
                                <div className="flex mt-4">
                                    <div>
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">12 months warranty</p>
                                    </div>
                                    <div className="pl-2">
                                        <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1">Complete box</p>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-4">
                                    <h2 tabIndex="0" className="focus:outline-none text-indigo-700 text-xs font-semibold">Bay Area, San Francisco</h2>
                                    <h3 tabIndex="0" className="focus:outline-none text-indigo-700 text-xl font-semibold"></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>

    </>
  )
}

export default Allproducts