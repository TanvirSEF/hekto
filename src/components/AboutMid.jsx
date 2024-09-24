import React from 'react'
import Container from './Container'
import Wf1 from '../assets/wf1.png'
import Wf2 from '../assets/wf2.png'
import Wf3 from '../assets/wf3.png'
import Wf4 from '../assets/wf4.png'

const AboutMid = () => {
    return (
        <section className="sec_pad">
            <Container>
                <div className="text-center">
                    <h2 className='heading'>Our Features</h2>
                </div>
                <div className="flex justify-between">
                    <div className="w-[24%] py-[50px] px-[25px] text-center bg-[#FFF] shadow-lg hover:border-b-2 border-[#FF9100]">
                        <div className="flex justify-center">
                            <img src={Wf1} alt='latest_product' />
                        </div>
                        <h5 className='text-[22px] text-[#151875] font-semibold pb-[15px] pt-[15px] font-jsans'>Free Delivery</h5>
                        <p className='text-[16px] text-[#1A0B5B4D] font-bold leading-[25px] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="w-[24%] py-[50px] px-[25px] text-center bg-[#FFF] shadow-lg hover:border-b-2 border-[#FF9100]">
                        <div className="flex justify-center">
                            <img src={Wf2} alt='latest_product' />
                        </div>
                        <h5 className='text-[22px] text-[#151875] font-semibold pb-[15px] pt-[15px] font-jsans'>100% Cash Back</h5>
                        <p className='text-[16px] text-[#1A0B5B4D] font-bold leading-[25px] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="w-[24%] py-[50px] px-[25px] text-center bg-[#FFF] shadow-lg hover:border-b-2 border-[#FF9100]">
                        <div className="flex justify-center">
                            <img src={Wf3} alt='latest_product' />
                        </div>
                        <h5 className='text-[22px] text-[#151875] font-semibold pb-[15px] pt-[15px] font-jsans'>Quality Product</h5>
                        <p className='text-[16px] text-[#1A0B5B4D] font-bold leading-[25px] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                    <div className="w-[24%] py-[50px] px-[25px] text-center bg-[#FFF] shadow-lg hover:border-b-2 border-[#FF9100]">
                        <div className="flex justify-center">
                            <img src={Wf4} alt='latest_product' />
                        </div>
                        <h5 className='text-[22px] text-[#151875] font-semibold pb-[15px] pt-[15px] font-jsans'>24/7 Support</h5>
                        <p className='text-[16px] text-[#1A0B5B4D] font-bold leading-[25px] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default AboutMid
