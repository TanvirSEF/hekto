import React from 'react'
import Logo from "../assets/logo.png"
import Container from './Container'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <section className='sec_pad mt-12 bg-[#EEEFFB]'>
        <Container>
          <div className="flex justify-between">
            <div className="w-1/3">
              <div className="pb-8">
                <img src={Logo} alt="logo" />
              </div>
              <div className="relative mb-6">
                <input type="email" placeholder='Enter Email Address' className='w-full px-5 py-3 font-lato text-[16px] outline-none rounded-lg' />
                <button className='absolute top-[50%] right-0 -translate-y-[50%] font-lato text-base px-10 py-3 bg-[#FB2E86] rounded-sm text-white'>Sign Up</button>
              </div>
              <div className="">
                <h3 className='font-lato text-base font-normal text-[#8A8FB9] pb-3'>Contact Info</h3>
                <h4 className='font-lato text-base font-normal text-[#8A8FB9]'>17 Princess Road, London, Greater London NW1 8JR, UK</h4>
              </div>
            </div>
            <div className="">
              <ul>
                <li className='text-[22px] font-jsans font-semibold text-[#000000] pb-10'>Catagories</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Laptops & Computers</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Cameras & Photography</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Smart Phones & Tablets</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Video Games & Consoles</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9]'>Waterproof Headphones</li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li className='text-[22px] font-jsans font-semibold text-[#000000] pb-10'>Customer Care</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>My Account</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Discount</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Returnss</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Orders History</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9]'>Order Tracking</li>
              </ul>
            </div>
            <div className="">
              <ul>
                <li className='text-[22px] font-jsans font-semibold text-[#000000] pb-10'>Pages</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Blog</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Browse the Shop</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Category</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Pre-Built Pages</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9] pb-5'>Visual Composer Elements</li>
                <li className='text-base font-lato font-normal text-[#8A8FB9]'>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className='py-5 bg-[#E7E4F8] px-20'>
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              <h4 className='text-base font-lato font-medium text-[#9DA0AE]'>©Webecy - All Rights Reserved</h4>
            </div>
            <div className="flex gap-x-5">
              <div className="h-10 w-10 rounded-full flex justify-center items-center text-white text-lg bg-[#151875]">
                <FaFacebookF />
              </div>
              <div className="h-10 w-10 rounded-full flex justify-center items-center text-white text-lg bg-[#151875]">
                <RiInstagramFill />
              </div>
              <div className="h-10 w-10 rounded-full flex justify-center items-center text-white text-lg bg-[#151875]">
                <FaTwitter />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Footer
