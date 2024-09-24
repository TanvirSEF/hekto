/* eslint-disable react/jsx-key */
import { useContext } from "react";
import Container from "./Container";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { LuZoomIn } from "react-icons/lu";
import { apidata } from "./ContextApi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const LatestProduct = () => {
  let data = useContext(apidata);

  let NewArrival = data.filter(
    (product) => product.id >= 158 && product.id <= 163
  );
  let BestSeller = data.filter(
    (product) => product.id >= 117 && product.id <= 122
  );
  let Featured = data.filter(
    (product) => product.id >= 153 && product.id <= 158
  );
  let SpecialOffer = data.filter(
    (product) => product.id >= 109 && product.id <= 114
  );

  return (
    <section className="sec_pad lateproducts">
      <Container>
        <div className="text-center">
          <h2 className="heading">Leatest Products</h2>
        </div>
        <div className="">
          <Tabs>
            <TabList className="pb-12 flex justify-center">
              <Tab>
                <h3 className="text-[18px] font-bold font-lato px-5">
                  New Arrival
                </h3>
              </Tab>
              <Tab>
                <h3 className="text-[18px] font-bold font-lato px-5">
                  Best Seller
                </h3>
              </Tab>
              <Tab>
                <h3 className="text-[18px] font-bold font-lato px-5">
                  Featured
                </h3>
              </Tab>
              <Tab>
                <h3 className="text-[18px] font-bold font-lato px-5">
                  Special Offer
                </h3>
              </Tab>
            </TabList>
            <TabPanel>
              <div className="flex justify-between flex-wrap font-jsans">
                {NewArrival.map((product) => (
                  <div className="w-[32%] group mb-[50px]">
                    <div className="w-full bg-[#F7F7F7] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-[#FFF]">
                      <img src={product.thumbnail} alt="latest_product" />
                      <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <FiShoppingCart />
                        </div>
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <FaRegHeart />
                        </div>
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <LuZoomIn />
                        </div>
                      </div>
                      <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                        <h5 className="text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]">
                          Sale
                        </h5>
                      </div>
                    </div>
                    <div className="flex justify-between pt-3">
                      <div className="">
                        <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>
                          {product.title}
                        </h4>
                      </div>
                      <div className="flex">
                        <h4 className="text-[16px] font-normal text-[#151875] pr-4">
                          ${product.price}
                        </h4>
                        <h5 className="text-[16px] font-normal text-[#FB2448] pr-4 line-through">
                          $65.00
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-between flex-wrap font-jsans">
                {BestSeller.map((product) => (
                  <div className="w-[32%] group mb-[50px]">
                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                      <img src={product.thumbnail} alt="latest_product" />
                      <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <FiShoppingCart />
                        </div>
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <FaRegHeart />
                        </div>
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <LuZoomIn />
                        </div>
                      </div>
                      <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                        <h5 className="text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]">
                          Sale
                        </h5>
                      </div>
                    </div>
                    <div className="flex justify-between pt-3 bg-white">
                      <div className="">
                        <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>
                          {product.title}
                        </h4>
                      </div>
                      <div className="flex">
                        <h4 className="text-[16px] font-normal text-[#151875] pr-4">
                          ${product.price}
                        </h4>
                        <h5 className="text-[16px] font-normal text-[#FB2448] pr-4 line-through">
                          $65.00
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-between flex-wrap font-jsans">
                {Featured.map((product) => (
                  <div className="w-[32%] group mb-[50px]">
                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                      <img src={product.thumbnail} alt="latest_product" />
                      <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <FiShoppingCart />
                        </div>
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <FaRegHeart />
                        </div>
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <LuZoomIn />
                        </div>
                      </div>
                      <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                        <h5 className="text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]">
                          Sale
                        </h5>
                      </div>
                    </div>
                    <div className="flex justify-between pt-3 bg-white">
                      <div className="">
                        <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>
                          {product.title}
                        </h4>
                      </div>
                      <div className="flex">
                        <h4 className="text-[16px] font-normal text-[#151875] pr-4">
                          ${product.price}
                        </h4>
                        <h5 className="text-[16px] font-normal text-[#FB2448] pr-4 line-through">
                          $65.00
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-between flex-wrap font-jsans">
                {SpecialOffer.map((product) => (
                  <div className="w-[32%] group">
                    <div className="w-full bg-[#F6F7FB] h-[270px] py-3 flex justify-center relative overflow-hidden group-hover:bg-white">
                      <img src={product.thumbnail} alt="latest_product" />
                      <div className="absolute bottom-[-150px] left-5 flex flex-col text-[20px] text-[#1389FF] group-hover:bottom-6 duration-500 ease-in-out">
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <FiShoppingCart />
                        </div>
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <FaRegHeart />
                        </div>
                        <div className="className='cursor-pointer h-[45px] w-[45px] rounded-full hover:bg-[#EEEFFB] flex justify-center items-center cursor-pointer">
                          <LuZoomIn />
                        </div>
                      </div>
                      <div className="absolute top-[-40px] left-2 -rotate-[0] duration-700 ease-in-out group-hover:-rotate-[25deg] group-hover:top-7">
                        <h5 className="text-[16px] text-[#FFF] px-[50px] py-2 bg-[#3F509E]">
                          Sale
                        </h5>
                      </div>
                    </div>
                    <div className="flex justify-between pt-3 bg-white">
                      <div className="">
                        <h4 className='text-[16px] font-normal text-[#151875] relative after:absolute after:content-[""] after:h-[2px] after:w-full after:bg-[#EEEFFB] after:bottom-0 after:left-0'>
                          {product.title}
                        </h4>
                      </div>
                      <div className="flex">
                        <h4 className="text-[16px] font-normal text-[#151875] pr-4">
                          ${product.price}
                        </h4>
                        <h5 className="text-[16px] font-normal text-[#FB2448] pr-4 line-through">
                          $65.00
                        </h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default LatestProduct;
