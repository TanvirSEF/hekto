import React, { useContext, useState } from 'react'
import PageHeadingReUsable from '../components/PageHeadingReUsable'
import Container from '../components/Container'
import { PiSquaresFourFill } from "react-icons/pi";
import { FaListUl } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { apidata } from '../components/ContextApi';
import Logos from '../components/Logos'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { addToCart } from '../components/CartSlice';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

const Shop = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);  // State for current page
  const [perPage, setPerPage] = useState(28);  // State for items per page

  let data = useContext(apidata);

  // Calculate the number of pages
  const totalPages = Math.ceil(data.length / perPage);

  // Calculate the products to display based on the current page and perPage value
  const startIdx = (currentPage - 1) * perPage;
  const selectedProducts = data.slice(startIdx, startIdx + perPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });  // Scroll to top smoothly
    }
  }

  let dispatch = useDispatch()

  let handleAddToCart = (item) => {
    dispatch(addToCart({...item, Qty: 1}))
    toast.success("Added To Cart Successfully")
  }

  return (
    <>
      {viewMode === 'list' ? <PageHeadingReUsable pagename="Shop List Default" /> : <PageHeadingReUsable pagename="Shop Grid Default" />}
      <section className='sec_pad'>
        <Container>
          <div className="flex justify-between items-center pb-24">
            <div className="w-1/3">
              <h3 className='text-[22px] font-jsans font-bold text-[#101750]'>Ecommerce Acceories & Fashion item </h3>
              <h5 className='text-[#8A8FB9] text-[12px] font-lato font-normal'>About 9,620 results (0.62 seconds)</h5>
            </div>
            <div className="flex gap-x-2 items-center">
              <h5 className='text-[#3F509E] text-[16px] font-lato font-normal'>Per Page :</h5>
              <input
                type="text"
                className='border-2 w-14 outline-none ps-2'
                value={perPage}
                onChange={(e) => {
                  const value = Number(e.target.value) || 1;
                  setPerPage(value);
                  setCurrentPage(1);  // Reset to first page
                }}  // Update perPage value
              />
            </div>
            <div className="flex gap-x-2 items-center">
              <h5 className='text-[#3F509E] text-[16px] font-lato font-normal'>Sort By :</h5>
              <select name="" id="" className='text-[#3F509E] text-[16px] font-lato font-normal border-2 py-1 outline-none ps-2'>
                <option value="">Best Match</option>
                <option value="">Most Popular</option>
                <option value="">Featured</option>
              </select>
            </div>
            <div className="flex gap-x-2 items-center">
              <h5 className='text-[#3F509E] text-[16px] font-lato font-normal'>View :</h5>
              <div className="flex gap-x-2 items-center text-[#3F509E]">
                <PiSquaresFourFill
                  className={`text-[20px] cursor-pointer ${viewMode === 'grid' ? 'text-blue-500' : ''}`}
                  onClick={() => setViewMode('grid')}
                />
                <FaListUl
                  className={`text-[17px] cursor-pointer ${viewMode === 'list' ? 'text-blue-500' : ''}`}
                  onClick={() => setViewMode('list')}
                />
              </div>
              <input type="text" className='w-34 outline-none ps-4 border-2' />
            </div>
          </div>
          <div className={`flex ${viewMode === 'list' ? 'flex-col w-4/5' : 'flex-wrap'} justify-between`}>
            {selectedProducts.map((product) => (
              <div key={product.id} className={`group pb-12 ${viewMode === 'list' ? 'w-full flex gap-4 items-center' : 'w-[23%]'}`}>
                <div className={`flex justify-center ${viewMode === 'list' ? 'w-3/5 bg-[#F6F7FB] pb-5' : 'pt-12 px-5 pb-5 bg-[#F6F7FB] group-hover:bg-[#EBF4F3] overflow-hidden relative'}`}>
                  <Link to={`/shop/${product.id}`}>
                    <img src={product.thumbnail} alt="product" />
                  </Link>
                  {viewMode === 'grid' && (
                    <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#151875] group-hover:bottom-6 duration-500 ease-in-out">
                      <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#FFF] flex justify-center items-center" onClick={() => handleAddToCart(product)} ><FiShoppingCart />
                      </div>
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
                      <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#FFF] flex justify-center items-center"><FaRegHeart /></div>
                      <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#FFF] flex justify-center items-center"><LuZoomIn /></div>
                    </div>
                  )}
                </div>
                <div className={`${viewMode === 'list' ? 'items-center w-3/4 text-left' : 'pt-4 text-center'}`}>
                  <div className="relative inline-block">
                    <h2 className='text-[#151875] text-[18px] w-[250px] overflow-hidden text-ellipsis whitespace-nowrap font-jsans font-bold pb-3'>{product.title}</h2>
                    <div className={`flex justify-center gap-x-2 pb-4 ${viewMode === 'list' ? 'absolute top-[50%] -translate-y-[50%] -right-20' : ''}`}>
                      <div className="h-3 w-3 rounded-full bg-[#DE9034] "></div>
                      <div className="h-3 w-3 rounded-full bg-[#EC42A2] "></div>
                      <div className="h-3 w-3 rounded-full bg-[#8568FF] "></div>
                    </div>
                  </div>
                  <div className={`flex gap-x-4 ${viewMode === 'list' ? 'justify-start' : 'justify-center'}`}>
                    <h5 className='text-[#151875] text-[18px] font-jsans font-normal'>${product.price}</h5>
                    <span className='text-[18px] font-jsans font-normal line-through text-[#FB2E86]'>${(product.price + 10 / 100).toFixed(2)}</span>
                    {viewMode === "list" &&
                      <div className="flex gap-x-2 text-[#FFC416]">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                      </div>
                    }
                  </div>
                  {viewMode === 'list' &&
                    <div className="">
                      <p className='text-[17px] font-lato font-normal leading-8 text-[#9295AA]'>{product.description}</p>
                      <div className="flex gap-x-2 text-[20px] text-[#151875] group-hover:bottom-6 duration-500 ease-in-out pt-2">
                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center" onClick={() => handleAddToCart(product)}><FiShoppingCart />
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
                        </div>
                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center"><FaRegHeart /></div>
                        <div className="cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center"><LuZoomIn /></div>
                      </div>
                    </div>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 pt-8">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className='px-4 py-2 border-2 text-[#3F509E] disabled:opacity-50'>
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 border-2 ${currentPage === i + 1 ? 'bg-[#3F509E] text-white' : 'text-[#3F509E]'}`}>
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className='px-4 py-2 border-2 text-[#3F509E] disabled:opacity-50'>
              Next
            </button>
          </div>
          <Logos />
        </Container>
      </section>
    </>
  )
}

export default Shop