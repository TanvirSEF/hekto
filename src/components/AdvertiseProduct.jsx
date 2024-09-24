import React from 'react'
import Container from './Container'
import Adver from '../assets/adver.png'

const AdvertiseProduct = () => {
    return (
        <section className='sec_pad bg-[#F1F0FF]'>
            <Container>
                <div className="flex gap-x-5">
                    <div className="">
                        <img src={Adver} alt='latest_product'/>
                    </div>
                    <div className="pt-[80px] w-[40%]">
                        <h2 className='text-[35px] font-bold text-[#151875] pb-[25px] font-jsans'>Unique Features Of leatest & Trending Poducts</h2>
                        <ul className='font-lato'>
                            <li className='text-[16px] font-medium text-[#ACABC3] mb-[15px] relative after:absolute after:content-[""] after:left-[-20px] after:top-[5px] after:bg-[#F52B70] after:h-[10px] after:w-[10px] after:rounded-full'>All frames constructed with hardwood solids and laminates</li>
                            <li className='text-[16px] font-medium text-[#ACABC3] mb-[15px] relative after:absolute after:content-[""] after:left-[-20px] after:top-[5px] after:bg-[#2B2BF5] after:h-[10px] after:w-[10px] after:rounded-full'>Reinforced with double wood dowels, glue, screw - nails corner
                                blocks and machine nails</li>
                            <li className='text-[16px] font-medium text-[#ACABC3] mb-[15px] relative after:absolute after:content-[""] after:left-[-20px] after:top-[5px] after:bg-[#2BF5CC] after:h-[10px] after:w-[10px] after:rounded-full'>Arms, backs and seats are structurally reinforced</li>
                        </ul>
                        <div className="flex gap-x-4">
                            <div className="">
                                <button className='text-[17px] font-medium text-[#FFF] px-[35px] py-[10px] bg-[#FB2E86] font-jsans'>Add To Cart</button>
                            </div>
                            <div className="">
                                <h5 className='text-[17px] font-medium text-[#151875] font-jsans'>B&B Italian Sofa</h5>
                                <h6 className='text-[17px] font-normal text-[#151875]'>$32.00</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AdvertiseProduct
