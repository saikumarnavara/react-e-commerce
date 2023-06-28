import React from 'react'
import carouselImg1 from '../../../assests/CarouselImgs/carouselImg1.jpg'
import carouselImg2 from '../../../assests/CarouselImgs/carouselImg2.jpg'

const FlagCarousel = () => {
    return (
        <div style={{ marginTop: '120px' }}>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src={carouselImg1} alt="..." />

                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src={carouselImg2} alt="..." />

                    </div>

                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default FlagCarousel
