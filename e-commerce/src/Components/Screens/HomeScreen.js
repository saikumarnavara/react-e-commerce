import React from 'react'
import MainCarousel from '../Containers/Carousels/MainCarousel';
import HomeCoverImage from '../Containers/Home/HomeCoverImage';
const HomeScreen = () => {
    return (
        <div >
            {/* <HomeCoverImage /> */}
            <div className='container'>
                <MainCarousel />
            </div>
        </div>
    )
}

export default HomeScreen
