import React from 'react'
import { CiMail } from "react-icons/ci";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Container from './Container';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

    let data = useSelector((state)=> state.cartManagement.cartItem)

    return (
        <section className='bg-[#7E33E0] text-white'>
            <Container>
                <div className="flex justify-between py-[15px] items-center">
                    <div className="w-[40%] flex gap-x-10">
                        <div className="flex gap-x-2 items-center text-[16px] font-jsans">
                            <CiMail />
                            <h3>sahedrahmanshakil@gmail.com</h3>
                        </div>
                        <div className="flex gap-x-2 items-center text-[16px] font-jsans">
                            <MdOutlineWifiCalling3 />
                            <h3>+880 1609-302239</h3>
                        </div>
                    </div>
                    <div className="w-[60%] flex justify-end text-end font-jsans pr-9">
                        <ul className='flex gap-x-6'>
                            <li>
                                <select name="" id="" className='bg-[#7E33E0] outline-none'>
                                    <option value="">English</option>
                                    <option value="">Bengali</option>
                                </select>
                            </li>
                            <li>
                                <select name="" id="" className='bg-[#7E33E0] outline-none'>
                                    <option value="">USD</option>
                                    <option value="">BDT</option>
                                </select>
                            </li>
                            <li className='flex gap-x-2'>Login <FaRegUser /></li>
                            <li className='flex gap-x-2'>Wishlist <FaRegHeart /></li>
                            <li className='text-[20px] relative'>
                                <div className="">
                                    <Link to="/cart">
                                        <FiShoppingCart />
                                    </Link>
                                </div>
                                <div className="absolute -top-3 -right-3 h-5 w-5 rounded-full bg-[#FB2E86] flex justify-center items-center">
                                    <span className='text-[14px] font-lato'>{data.length}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Header
