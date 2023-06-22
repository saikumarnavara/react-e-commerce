import React from 'react'
import MainCarousel from '../Containers/Carousels/MainCarousel';
import HomeCoverImage from '../Containers/Home/HomeCoverImage';
import ScrollButton from '../Containers/ScrollToTop/ScrollUp';
import CategoryCards from '../Containers/CategoryCarousel/CategoryCards';
const HomeScreen = () => {
    return (
        <div >
            {/* <HomeCoverImage /> */}
            <div className='container'>
                <MainCarousel />
                <CategoryCards />
                <ScrollButton />
            </div>
        </div>
    )
}

export default HomeScreen
