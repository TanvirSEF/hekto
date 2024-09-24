import React from 'react'
import Container from './Container'
import ClientImg from "../assets/client.png"
import Slider from 'react-slick'

const AboutBottom = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div style={{
                    backgroundColor: "transparent",
                }}
            >
                <ul style={{ margin: "-12px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div className='abc' style={{
                    color: "transparent",
                    width: "25px",
                    height: "5px",
                    background: "#8A8FB9",
                    borderRadius: "5px",
                }}
            >
                {i + 1}
            </div>
        )
    }
    return (
        <section className="sec_pad bg-[#FBFBFF]">
            <Container>
                <div className="text-center">
                    <h2 className='heading'>Our Client Say!</h2>
                </div>
                <div className="text-center w-[56%] mx-auto">
                    <Slider {...settings}>
                        <div className="">
                            <div className="flex justify-center mb-2">
                                <img src={ClientImg} alt="client_review" />
                            </div>
                            <h3 className='text-[22px] font-lato font-bold text-[#151875]'>Selina Gomez</h3>
                            <h3 className='text-[10px] font-lato font-normal text-[#8A8FB9] pb-2'>Ceo At Webecy Digital</h3>
                            <p className='text-[16px] font-lato font-bold text-[#8A8FB9] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                        </div>
                        <div className="">
                            <div className="flex justify-center mb-2">
                                <img src={ClientImg} alt="client_review" />
                            </div>
                            <h3 className='text-[22px] font-lato font-bold text-[#151875]'>Selina Gomez</h3>
                            <h3 className='text-[10px] font-lato font-normal text-[#8A8FB9] pb-2'>Ceo At Webecy Digital</h3>
                            <p className='text-[16px] font-lato font-bold text-[#8A8FB9] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                        </div>
                        <div className="">
                            <div className="flex justify-center mb-2">
                                <img src={ClientImg} alt="client_review" />
                            </div>
                            <h3 className='text-[22px] font-lato font-bold text-[#151875]'>Selina Gomez</h3>
                            <h3 className='text-[10px] font-lato font-normal text-[#8A8FB9] pb-2'>Ceo At Webecy Digital</h3>
                            <p className='text-[16px] font-lato font-bold text-[#8A8FB9] leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam vitae a enim nunc, sed sapien egestas ac nam. Tristique ultrices dolor aliquam lacus volutpat praesent.</p>
                        </div>
                    </Slider>
                </div>
            </Container>
        </section>
    )
}

export default AboutBottom
