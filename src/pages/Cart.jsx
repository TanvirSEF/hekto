import React from 'react'
import PageHeadingReUsable from '../components/PageHeadingReUsable'
import Container from '../components/Container'
import { GiCrossedSabres } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrement, deletion, increment } from '../components/CartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {

    let cartedproducts = useSelector((state) => state.cartManagement.cartItem);

    let dispatch = useDispatch()

    let handleIncrement = (index) => {
        dispatch(increment(index))
    }

    let handleDecrement = (index) => {
        dispatch(decrement(index))
    }

    let handleDeleteProduct = (index) => {
        dispatch(deletion(index))
    }

    const { totalPrice, totalQuantity } = cartedproducts.reduce(
        (acc, item) => {
            acc.totalPrice += item.price * item.Qty;
            acc.totalQuantity += item.Qty;
            return acc;
        },
        { totalPrice: 0, totalQuantity: 0 }
    );

    let handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <>
            <PageHeadingReUsable pagename="Shopping Cart" />
            {cartedproducts.length == 0 ?

                <div className="text-center py-9">
                    <h2 className='text-[34px] font-jsans font-bold text-[#101750] pb-2'>Cart is empty</h2>
                    <a className='font-jsans text-[16px] font-semibold text-[#FFF] py-2 px-5 rounded-sm bg-[#FB2E86]'><Link to="/shop">Go to Shop</Link></a>
                </div>

                :

                <section className='sec_pad'>
                    <Container>
                        <div className="flex justify-between">
                            <div className="w-[65%]">
                                <div className="flex justify-between pb-9 items-center">
                                    <div className="w-2/5">
                                        <h3 className='font-jsans text-[20px] font-bold text-[#1D3178]'>Product</h3>
                                    </div>
                                    <div className="w-1/6 flex justify-center">
                                        <h3 className='font-jsans text-[20px] font-bold text-[#1D3178]'>Price</h3>
                                    </div>
                                    <div className="w-1/5 flex justify-center">
                                        <h3 className='font-jsans text-[20px] font-bold text-[#1D3178]'>Quantity</h3>
                                    </div>
                                    <div className="w-1/5 flex justify-center">
                                        <h3 className='font-jsans text-[20px] font-bold text-[#1D3178]'>Total</h3>
                                    </div>
                                </div>
                                {cartedproducts.map((product, index) => (
                                    <div className="flex justify-between items-center pb-3 border-b-2 mb-3">
                                        <div className="w-2/5">
                                            <div className="flex gap-x-3 items-center">
                                                <div className="relative bg-[#C4C4C4]">
                                                    <img className='w-20 h-20' src={product.thumbnail} alt="image" />
                                                    <div className="absolute -top-2 -right-2 cursor-pointer text-white w-6 h-6 bg-[#000000] flex justify-center items-center rounded-full" onClick={() => handleDeleteProduct(index)}>
                                                        <GiCrossedSabres />
                                                    </div>
                                                </div>
                                                <div className="">
                                                    <h3 className='font-jsans text-[14px] font-normal text-[#000000]'>{product.title}</h3>
                                                    <h4 className='font-jsans text-[14px] font-normal text-[#A1A8C1]'>Color : Brown</h4>
                                                    <h4 className='font-jsans text-[14px] font-normal text-[#A1A8C1]'>Size : XL</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-1/6 flex justify-center">
                                            <h3 className='font-jsans text-[14px] font-normal text-[#15245E]'>${product.price}</h3>
                                        </div>
                                        <div className="w-1/5 flex justify-center">
                                            <div className="flex gap-x-6 bg-[#E7E7EF] justify-around items-center">
                                                <div className="cursor-pointer bg-[#BEBFC2] px-2" onClick={() => handleDecrement(index)}>-</div>
                                                <div className="">{product.Qty}</div>
                                                <div className="cursor-pointer bg-[#BEBFC2] px-2" onClick={() => handleIncrement(index)}>+</div>
                                            </div>
                                        </div>
                                        <div className="w-1/5 flex justify-center">
                                            <h3 className='font-jsans text-[14px] font-normal text-[#15245E]'>${(product.Qty * product.price).toFixed(2)}</h3>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-between pt-9">
                                    <button className='font-jsans text-[16px] font-semibold text-[#FFF] py-2 px-5 rounded-sm bg-[#FB2E86]'>Update Cart</button>
                                    <button className='font-jsans text-[16px] font-semibold text-[#FFF] py-2 px-5 rounded-sm bg-[#FB2E86]' onClick={handleClearCart}>Clear Cart</button>
                                </div>
                            </div>
                            <div className="w-[30%]">
                                <div className="text-center pb-9">
                                    <h3 className='font-jsans text-[20px] font-bold text-[#1D3178]'>Cart Totals</h3>
                                </div>
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
                                        <Link to="/checkout">
                                            <button className='w-full py-3 bg-[#19D16F] rounded-lg font-lato text-[14px] font-bold text-[#FFF]'>Proceed To Checkout</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            }

        </>
    )
}

export default Cart
