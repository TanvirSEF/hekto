import React from 'react'
import Container from './Container'
import Latest from '../assets/featured.png'
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import TP1 from '../assets/tp1.png'
import TP2 from '../assets/tp2.png'
import TP3 from '../assets/tp3.png'

const TrendingProducts = () => {
    return (
        <section id='' className='sec_pad'>
            <Container>
                <div className="text-center">
                    <h2 className='heading'>Trending Products</h2>
                </div>
                <div className="flex justify-between flex-wrap pb-20">
                    <div className="w-[24%] group px-3 pt-3 pb-8 bg-white shadow-xl">
                        <div className="w-full bg-[#F6F7FB] h-[220px] py-3 flex justify-center relative overflow-hidden">
                            <img src={Latest} alt='latest_product' className='group-hover:scale-110 duration-500 ease-in-out'/>
                            <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                            <button className='absolute -bottom-12 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out font-lato'>View Details</button>
                        </div>
                        <div className="pt-6 bg-white text-center">
                            <div className="pb-3">
                                <h4 className='text-[16px] font-bold font-lato text-[#151875]'>Comfort Handy Craft</h4>
                            </div>
                            <div className="flex justify-center">
                                <h4 className='text-[16px] ffont-bold font-lato text-[#151875] pr-4'>$42.00</h4>
                                <h5 className='text-[16px] font-bold font-lato text-[#1518754D] pr-4 line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%] group px-3 pt-3 pb-8 bg-white shadow-xl">
                        <div className="w-full bg-[#F6F7FB] h-[220px] py-3 flex justify-center relative overflow-hidden">
                            <img src={Latest} alt='latest_product' className='group-hover:scale-110 duration-500 ease-in-out'/>
                            <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                            <button className='absolute -bottom-12 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out font-lato'>View Details</button>
                        </div>
                        <div className="pt-6 bg-white text-center">
                            <div className="pb-3">
                                <h4 className='text-[16px] font-bold font-lato text-[#151875]'>Comfort Handy Craft</h4>
                            </div>
                            <div className="flex justify-center">
                                <h4 className='text-[16px] ffont-bold font-lato text-[#151875] pr-4'>$42.00</h4>
                                <h5 className='text-[16px] font-bold font-lato text-[#1518754D] pr-4 line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%] group px-3 pt-3 pb-8 bg-white shadow-xl">
                        <div className="w-full bg-[#F6F7FB] h-[220px] py-3 flex justify-center relative overflow-hidden">
                            <img src={Latest} alt='latest_product' className='group-hover:scale-110 duration-500 ease-in-out'/>
                            <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                            <button className='absolute -bottom-12 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out font-lato'>View Details</button>
                        </div>
                        <div className="pt-6 bg-white text-center">
                            <div className="pb-3">
                                <h4 className='text-[16px] font-bold font-lato text-[#151875]'>Comfort Handy Craft</h4>
                            </div>
                            <div className="flex justify-center">
                                <h4 className='text-[16px] ffont-bold font-lato text-[#151875] pr-4'>$42.00</h4>
                                <h5 className='text-[16px] font-bold font-lato text-[#1518754D] pr-4 line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                    <div className="w-[24%] group px-3 pt-3 pb-8 bg-white shadow-xl">
                        <div className="w-full bg-[#F6F7FB] h-[220px] py-3 flex justify-center relative overflow-hidden">
                            <img src={Latest} alt='latest_product' className='group-hover:scale-110 duration-500 ease-in-out'/>
                            <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FiShoppingCart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                            </div>
                            <button className='absolute -bottom-12 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white group-hover:bottom-3 duration-500 ease-in-out font-lato'>View Details</button>
                        </div>
                        <div className="pt-6 bg-white text-center">
                            <div className="pb-3">
                                <h4 className='text-[16px] font-bold font-lato text-[#151875]'>Comfort Handy Craft</h4>
                            </div>
                            <div className="flex justify-center">
                                <h4 className='text-[16px] ffont-bold font-lato text-[#151875] pr-4'>$42.00</h4>
                                <h5 className='text-[16px] font-bold font-lato text-[#1518754D] pr-4 line-through'>$65.00</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="w-1/3 bg-[#FFF6FB] pt-9 pl-6">
                        <h3 className='text-[26px] font-medium font-jsans text-[#151875]'>23% off in all products</h3>
                        <a href="/" className='text-[#FB2E86] text-[16px] font-medium font-lato underline'>Shop Now</a>
                        <div className="flex justify-end">
                            <img src={TP1} alt="icon" />
                        </div>
                    </div>
                    <div className="w-1/3 bg-[#EEEFFB] pt-9 pl-6">
                        <h3 className='text-[26px] font-medium font-jsans text-[#151875]'>23% off in all products</h3>
                        <a href="/" className='text-[#FB2E86] text-[16px] font-medium font-lato underline'>View Collection</a>
                        <div className="flex justify-end">
                            <img src={TP2} alt="icon" />
                        </div>
                    </div>
                    <div className="w-[30%]">
                        <ul>
                            <li className='flex gap-x-5 items-center pb-3'>
                                <div className="w-1/3 bg-[#F5F6F8] py-3 flex justify-center">
                                    <img src={TP3} alt="image" />
                                </div>
                                <div className="">
                                    <h2 className='text-[16px] font-medium font-jsans text-[#151875]'>Executive Seat chair</h2>
                                    <h5 className='text-[12px] font-normal font-jsans text-[#151875] line-through'>$32.00</h5>
                                </div>
                            </li>
                            <li className='flex gap-x-5 items-center pb-3'>
                                <div className="w-1/3 bg-[#F5F6F8] py-3 flex justify-center">
                                    <img src={TP3} alt="image" />
                                </div>
                                <div className="">
                                    <h2 className='text-[16px] font-medium font-jsans text-[#151875]'>Executive Seat chair</h2>
                                    <h5 className='text-[12px] font-normal font-jsans text-[#151875] line-through'>$32.00</h5>
                                </div>
                            </li>
                            <li className='flex gap-x-5 items-center'>
                                <div className="w-1/3 bg-[#F5F6F8] py-3 flex justify-center">
                                    <img src={TP3} alt="image" />
                                </div>
                                <div className="">
                                    <h2 className='text-[16px] font-medium font-jsans text-[#151875]'>Executive Seat chair</h2>
                                    <h5 className='text-[12px] font-normal font-jsans text-[#151875] line-through'>$32.00</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default TrendingProducts
