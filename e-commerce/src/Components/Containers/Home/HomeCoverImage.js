import React from 'react'
import { BsTranslate } from 'react-icons/bs'
import modelGirl from '../../../assests/models/modelGirl.png';
import { useNavigate } from 'react-router';
import './HomeCover.css'
const HomeCoverImage = () => {
    const navigate = useNavigate();

    const buttonOnclick = () => {
        navigate('/men')
    }
    return (
        <div class='container' style={{ height: '100vh', width: '100vw', backgroundSize: 'cover', backgroundPosition: 'center', }}>
            <a href='/men'><img src={modelGirl} alt='loading...' /></a>
            <div className='image-overlay'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 text-center'>
                            <h1>PRETTY FOR SUMMER</h1>
                            <button type="button" class="btn btn-outline-light" onClick={buttonOnclick}>SHOP ALL NEW </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCoverImage
