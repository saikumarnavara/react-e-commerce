import React from 'react'
import men_category_img from '../../../assests/categoryImages/men_category_img.jpg'
import women_category_img from '../../../assests/categoryImages/women_category_img.jpg'
import beauty_category_img from '../../../assests/categoryImages/beauty_category_img.jpg'
import grocery_category_image from '../../../assests/categoryImages/grocery_category_image.jpg'
import { useNavigate } from 'react-router'
const CategoryCards = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h3 className='text-center text-primary'>Lateast Trends</h3>
            <div className='container d-flex justify-content-center'>
                <div className='row row-cols-1 row-cols-md-2 g-4'>
                    <div className='col-md-6 col-lg-3 mb-4'>
                        <div class="card shadow" >
                            <img src={men_category_img} class="card-img-top mx-auto d-block" alt="..." style={{ height: 'auto', width: '200px', cursor: 'pointer' }}
                                onClick={() => { navigate('/men') }} />
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4'>
                        <div class="card shadow" >
                            <img src={women_category_img} class="card-img-top mx-auto d-block" alt="..." style={{ height: 'auto', width: '200px', cursor: 'pointer' }}
                                onClick={() => { navigate('/women') }} />
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4'>
                        <div class="card shadow" >
                            <img src={grocery_category_image} class="card-img-top mx-auto d-block" alt="..." style={{ height: 'auto', width: '210px', cursor: 'pointer' }}
                                onClick={() => { navigate('/grocery') }} />
                        </div>
                    </div>
                    <div className='col-md-6 col-lg-3 mb-4'>
                        <div class="card shadow" >
                            <img src={beauty_category_img} class="card-img-top mx-auto d-block" alt="..." style={{ height: 'auto', width: '236px', cursor: 'pointer' }}
                                onClick={() => { navigate('/beauty') }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryCards
