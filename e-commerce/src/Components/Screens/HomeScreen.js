import React from 'react'
import MainCarousel from '../Containers/Carousels/MainCarousel';
import HomeCoverImage from '../Containers/Home/HomeCoverImage';
import ScrollButton from '../Containers/ScrollToTop/ScrollUp';
import CategoryCards from '../Containers/CategoryCarousel/CategoryCards';
import FlagCarousel from '../Containers/Carousels/FlagCarousel';
const HomeScreen = () => {
    return (
        <div >
            {/* <HomeCoverImage /> */}
            <div className='container'>
                <MainCarousel />
                {/* <FlagCarousel /> */}
                <CategoryCards />
                <ScrollButton />
            </div>
        </div>
    )
}

export default HomeScreen
