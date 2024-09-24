import React from 'react'
import Container from './Container'
import { useSelector } from 'react-redux';


const CheckoutDetails = () => {

    let cartedproducts = useSelector((state) => state.cartManagement.cartItem);

    const { totalPrice, totalQuantity } = cartedproducts.reduce(
        (acc, item) => {
            acc.totalPrice += item.price * item.Qty;
            acc.totalQuantity += item.Qty;
            return acc;
        },
        { totalPrice: 0, totalQuantity: 0 }
    );


    return (
        <section className='sec_pad'>
            <Container>
                <div className="pb-6">
                    <h4 className='text-[24px] font-bold text-[#1D3178] font-jsans pb-3'>Checkout</h4>
                    <p className='text-[12px] font-normal text-[#1D3178] font-lato pb-4'>Cart/ Information/ Shipping/ Payment</p>
                </div>
                <div className="flex justify-between">
                    <div className="w-3/5">
                        <div className="py-16 px-8 bg-[#F8F8FD]">
                            <div className="pb-20">
                                <h5 className='text-[18px] font-bold text-[#1D3178] font-jsans pb-7'>Contact Information</h5>
                                <input type="email" placeholder='Email or mobile phone number' className='py-3 border-b-2 w-full bg-transparent outline-none pr-4' />
                                <div className="flex gap-x-3 items-center pt-8 pb-9">
                                    <input type="checkbox" />
                                    <h4 className='font-lato text-[14px] font-normal text-[#8A91AB]'>Keep me up to date on news and excluive offers</h4>
                                </div>
                            </div>
                            <div className="">
                                <h5 className='text-[18px] font-bold text-[#1D3178] font-jsans pb-7'>Shipping address</h5>
                                <form action="">
                                    <div className="flex justify-between pb-5">
                                        <input type="text" placeholder='First Name' className='py-3 border-b-2 bg-transparent outline-none pr-4 w-[45%]' />
                                        <input type="text" placeholder='Last name' className='py-3 border-b-2 bg-transparent outline-none pr-4 w-[45%]' />
                                    </div>
                                    <input type="text" placeholder='Address' className='py-3 border-b-2 w-full bg-transparent outline-none pr-4 mb-5' />
                                    <input type="text" placeholder='Appartnentment,suit,e.t.c (optinal)' className='py-3 border-b-2 w-full bg-transparent outline-none pr-4 mb-5' />
                                    <input type="text" placeholder='City' className='py-3 border-b-2 w-full bg-transparent outline-none pr-4 mb-5' />
                                    <div className="flex justify-between pb-24">
                                        <input type="text" placeholder='Bangladesh' className='py-3 border-b-2 bg-transparent outline-none pr-4 w-[45%]' />
                                        <input type="text" placeholder='Postal Code' className='py-3 border-b-2 bg-transparent outline-none pr-4 w-[45%]' />
                                    </div>
                                </form>
                                <button type='submit' className='font-jsans text-[16px] font-semibold text-[#FFF] py-2 px-5 rounded-sm bg-[#FB2E86]'>Continue Shipping</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-[37%]">
                        <div className="pb-12">
                            {cartedproducts.map((product) => (
                                <div className="flex justify-between items-center pb-3 border-b-2 mb-3">
                                    <div className="w-3/4">
                                        <div className="flex gap-x-3 items-center">
                                            <div className="relative bg-[#C4C4C4]">
                                                <img className='w-20 h-20' src={product.thumbnail} alt="image" />
                                            </div>
                                            <div className="">
                                                <h3 className='font-jsans text-[14px] font-normal text-[#000000]'>{product.title}</h3>
                                                <h4 className='font-jsans text-[14px] font-normal text-[#A1A8C1]'>Color : Brown</h4>
                                                <h4 className='font-jsans text-[14px] font-normal text-[#A1A8C1]'>Size : XL</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[20%] text-center">
                                        <h3 className='font-jsans text-[14px] font-normal text-[#15245E]'>${product.price}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="">
                            <div className="py-9 px-8 bg-[#F4F4FC]">
                                <div className="flex justify-between pb-3 border-b-2 border-[#E8E6F1]">
                                    <h3 className='font-lato text-[18px] font-semibold text-[#1D3178]'>Total Quantity :</h3>
                                    <h3 className='font-lato text-[16px] font-normal text-[#15245E]'>{totalQuantity}</h3>
                                </div>
                                <div className="flex justify-between pt-9 pb-2 border-b-2 border-[#E8E6F1]">
                                    <h3 className='font-lato text-[18px] font-semibold text-[#1D3178]'>Totals :</h3>
                                    <h3 className='font-lato text-[16px] font-normal text-[#15245E]'>${totalPrice.toFixed(2)}</h3>
                                </div>
                                <div className="">
                                    <div className="flex gap-x-3 items-center pt-8 pb-9">
                                        <input type="checkbox" />
                                        <h4 className='font-lato text-[14px] font-normal text-[#8A91AB]'>Shipping & taxes calculated at checkout</h4>
                                    </div>
                                    <button className='w-full py-3 bg-[#19D16F] rounded-lg font-lato text-[14px] font-bold text-[#FFF]'>Confirm Order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default CheckoutDetails
