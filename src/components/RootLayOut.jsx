import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import ToTop from './ToTop'

const RootLayOut = () => {
    return (
        <>
            <Header />
            <Navbar />
            <Outlet />
            <Footer />
            <ToTop/>
            <ScrollRestoration />
        </>
    )
}

export default RootLayOut
