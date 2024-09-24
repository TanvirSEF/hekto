import React from 'react'
import Container from './Container'
import AboutImg from "../assets/abouttop.png"
import { Link } from 'react-router-dom'

const AboutTop = () => {
  return (
    <section className='sec_pad'>
        <Container>
            <div className="flex justify-between">
                <div className="w-1/2">
                    <div className="relative ml-8 inline-block">
                        <img src={AboutImg} alt="about_image"/>
                        <div className="absolute -left-4 -bottom-4  bg-[#2B3CAB] h-full w-full rounded-lg -z-10"></div>
                    </div>
                </div>
                  <div className="w-1/2">
                      <div className="pt-10 pr-5">
                          <h2 className='text-[36px] font-jsans font-bold text-[#101750] pb-2'>Know About Our Ecomerce Business, History</h2>
                          <p className='text-[16px] font-lato font-medium text-[#8A8FB9] pb-20'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                          <Link to="/contact">
                              <a className='text-[18px] font-lato font-medium text-white py-3 px-8 rounded-md bg-[#FB2E86]'>Contact us</a>
                          </Link>
                      </div>
                  </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutTop
