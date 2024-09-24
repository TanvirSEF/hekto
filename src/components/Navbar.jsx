import React, { useContext, useState } from 'react'
import Container from './Container'
import Logo from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { apidata } from './ContextApi';

const Navbar = () => {

    let data = useContext(apidata)

    let [searchInput, setSearchInput] = useState("")
    let [searchFilter, setSearchFilter] = useState([])

    let handleSearch = (e) => {
        setSearchInput(e.target.value)
        if (e.target.value == "") {
            setSearchFilter([])
        } else {
            let filter = data.filter((item) => item.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
            setSearchFilter(filter)
        }
    }

    let navigate = useNavigate()
    let handlePDfromSearch = (id) => {
        navigate(`/shop/${id}`)
        setSearchFilter([])
    }


    return (
        <section className='py-4'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[20%] items-center">
                        <Link to="/"><img src={Logo} alt='latest_product' /></Link>
                    </div>
                    <div className="w-[50%]">
                        <ul className="flex gap-x-10 items-center font-lato">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/shop">Products</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="w-[30%] relative">
                        <div className="flex items-center">
                            <input value={searchInput} onChange={handleSearch} type="search" className='w-[85%] bg-[#D9D9D9] h-[40px] outline-none px-5' />
                            <IoSearch className='w-[15%] bg-[#FB2E86] h-[40px] py-[10px] text-white' />
                            {searchFilter.length > 0 &&
                                <div className="absolute top-10 left-0 z-40 w-full max-h-[500px] overflow-y-auto">
                                    {searchFilter.map((item) => (
                                        <div onClick={()=>handlePDfromSearch(item.id)} className="border-b-2">
                                            <div className="flex justify-between items-center bg-[#F5F5F3] lg:px-5 px-3 py-1 cursor-pointer">
                                                <div className="w-[25%]">
                                                    <img className='w-full' src={item.thumbnail} alt="cart" />
                                                </div>
                                                <div className="w-[70%] text-[#262626] text-[16px] font-sans font-bold">
                                                    <h3 className='pb-[12px]'>{item.title}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar