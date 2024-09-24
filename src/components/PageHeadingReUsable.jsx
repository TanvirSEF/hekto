import React from 'react'
import Container from './Container'

const PageHeadingReUsable = ({ pagename }) => {
  return (
    <section className='bg-[#F6F5FF] py-24'>
        <Container>
            <div className="">
                <h2 className='text-[34px] font-jsans font-bold text-[#101750] pb-2'>{pagename}</h2>
                <h4 className='text-[16px] font-lato font-medium text-[#000000]'>Home . Pages . <span className='text-[#FB2E86]'>{pagename}</span></h4>
            </div>
        </Container>
    </section>
  )
}

export default PageHeadingReUsable
