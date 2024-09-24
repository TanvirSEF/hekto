import React, { useContext } from 'react'
import PDetailsInfo from '../components/PDetailsInfo'
import PDetailsMain from '../components/PDetailsMain'
import PageHeadingReUsable from '../components/PageHeadingReUsable'
import Logos from '../components/Logos'
import { apidata } from '../components/ContextApi'

const ProductDetails = () => {

    return (
        <>
            <PageHeadingReUsable pagename='Product Details'/>
            <PDetailsMain/>
            <PDetailsInfo/>
            <Logos/>
        </>
    )
}

export default ProductDetails