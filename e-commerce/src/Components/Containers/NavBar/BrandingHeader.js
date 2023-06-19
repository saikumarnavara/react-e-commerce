import React from 'react'
import { useMediaQuery } from 'react-responsive'
const BrandingHeader = () => {
    return (
        <div class='container-fluid' style={{ backgroundColor: 'orange', textAlign: 'center', }}>
            <h6 className='d-none d-lg-block' style={{ marginBottom: '0px' }}>FREE SHIPPING ON ORDERS OVER $75</h6>
        </div>
    )
}
export default BrandingHeader
