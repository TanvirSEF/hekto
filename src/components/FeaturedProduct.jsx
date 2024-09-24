import React, { useContext } from 'react'
import Container from './Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { apidata } from './ContextApi';
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { addToCart } from './CartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#FB2E86] rounded-full text-center flex justify-center items-center absolute top-[100%] lg:right-[44%] right-0 z-40 cursor-pointer' onClick={onClick}><HiOutlineArrowNarrowRight className='inline-block lg:text-[25px] text-white' /></div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#FB2E86] rounded-full text-center flex justify-center items-center absolute top-[100%] lg:left-[44%] left-0 z-40 cursor-pointer' onClick={onClick}><HiOutlineArrowNarrowLeft className='inline-block lg:text-[25px] text-white' /></div>
    );
}

const FeaturedProduct = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    let data = useContext(apidata)
    let dispatch = useDispatch()

    let handleAddToCart = (item) => {
        dispatch(addToCart({ ...item, Qty: 1 }))
        toast.success("Added To Cart Successfully")
    }

    return (
        <>
            <section className='sec_pad'>
                <Container>
                    <div className="text-center">
                        <h2 className='heading'>Featured Products</h2>
                    </div>
                    <Slider {...settings} className='text-center'>
                        {data.map((product) => (
                            <div className="!w-[95%] shadow-md group font-lato">
                                <div className="w-full bg-[#F6F7FB] h-[235px] py-8 flex justify-center relative overflow-hidden">
                                    <img src={product.thumbnail} alt='latest_product' className='group-hover:scale-125 duration-700 ease-in-out' />
                                    <div className="flex absolute top-4 left-[-150px] group-hover:left-2 duration-700 ease-in-out text-[20px] text-[#1389FF]">
                                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer" onClick={() => handleAddToCart(product)}><FiShoppingCart /></div>
                                        <ToastContainer
                                            position="top-right"
                                            autoClose={500}
                                            hideProgressBar={false}
                                            newestOnTop={false}
                                            closeOnClick
                                            rtl={false}
                                            pauseOnFocusLoss
                                            draggable
                                            pauseOnHover
                                            theme="light"
                                        />
                                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><FaRegHeart /></div>
                                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer"><LuZoomIn /></div>
                                    </div>
                                    <Link to={`/shop/${product.id}`} className='absolute bottom-3 text-[16px] font-medium py-[10px] px-[15px] bg-[#08D15F] rounded-md text-white opacity-0 group-hover:opacity-100'>View Details</Link>
                                </div>
                                <div className="text-center py-[15px] bg-white group-hover:bg-[#2F1AC4] group-hover:text-white">
                                    <h3 className='b_title text-[#FB2E86] group-hover:text-white'>{product.title}</h3>
                                    <div className="flex justify-center gap-x-2 pb-3">
                                        <div className="clr bg-[#05E6b7] "></div>
                                        <div className="clr bg-[#F701A8] "></div>
                                        <div className="clr bg-[#00009D] group-hover:bg-white"></div>
                                    </div>
                                    <h4 className='text-[14px] font-normal tect-[#151875] pb-[12px]'>Code - {product.sku}</h4>
                                    <h5 className='text-[14px] font-normal tect-[#151875]'>${product.price}</h5>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </section>
        </>
    )
}

export default FeaturedProduct
