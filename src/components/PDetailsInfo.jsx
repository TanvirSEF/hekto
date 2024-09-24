import React from 'react'
import Container from './Container'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaArrowRightLong } from "react-icons/fa6";


const PDetailsInfo = () => {
    return (
        <section className='sec_pad bg-[#F9F8FE] pdetails'>
            <Container>
                <Tabs>
                    <TabList className='pb-12'>
                        <Tab><h3 className='text-[#151875] text-[24px] font-jsans font-semibold pr-9'>Description</h3></Tab>
                        <Tab><h3 className='text-[#151875] text-[24px] font-jsans font-semibold px-9'>Additional Info</h3></Tab>
                        <Tab><h3 className='text-[#151875] text-[24px] font-jsans font-semibold px-9'>Reviews</h3></Tab>
                        <Tab><h3 className='text-[#151875] text-[24px] font-jsans font-semibold px-9'>Video</h3></Tab>
                    </TabList>
                    <TabPanel>
                        <h2 className='text-[#151875] text-[22px] font-jsans font-semibold pb-4'>Varius tempor.</h2>
                        <p className='text-[#A9ACC6] leading-7 text-[16px] font-jsans font-semibold pb-6'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                        <ul>
                            <li className='text-[#151875] text-[22px] font-jsans font-semibold pb-4'>More Details</li>
                            <li className='flex gap-x-3 items-center'>
                                <FaArrowRightLong/>
                                <p className='text-[#A9ACC6] leading-7 text-[16px] font-jsans font-semibold'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </li>
                            <li className='flex gap-x-3 items-center'>
                                <FaArrowRightLong/>
                                <p className='text-[#A9ACC6] leading-7 text-[16px] font-jsans font-semibold'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </li>
                            <li className='flex gap-x-3 items-center'>
                                <FaArrowRightLong/>
                                <p className='text-[#A9ACC6] leading-7 text-[16px] font-jsans font-semibold'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </li>
                            <li className='flex gap-x-3 items-center'>
                                <FaArrowRightLong/>
                                <p className='text-[#A9ACC6] leading-7 text-[16px] font-jsans font-semibold'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                            </li>
                        </ul>
                    </TabPanel>
                    <TabPanel>
                    <h3 className='text-[#151875] text-[24px] font-jsans font-semibold px-9'>Additional Info</h3>
                    </TabPanel>
                    <TabPanel>
                    <h3 className='text-[#151875] text-[24px] font-jsans font-semibold px-9'>Reviews</h3>
                    </TabPanel>
                    <TabPanel>
                    <h3 className='text-[#151875] text-[24px] font-jsans font-semibold px-9'>Video</h3>
                    </TabPanel>
                </Tabs>
            </Container>
        </section>
    )
}

export default PDetailsInfo
