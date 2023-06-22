import React, { useContext, useState } from 'react'
import { SortTitle } from '../../../Utils/Utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartStore, viewItem } from '../../../App';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router';
import BrandingHeader from '../../Containers/NavBar/BrandingHeader';
const WomenCards = (props) => {
    const navigate = useNavigate();
    const [clickedId, setClickedId] = useState([])
    const [cartId, setCardId] = useContext(cartStore)
    const [viewProduct, setViewProduct] = useContext(viewItem)
    const AddCartItem = (props) => {
        setClickedId([...clickedId, props])
        setCardId([...cartId, props])

        toast('Item Added to cart', {
            type: 'success',
            theme: 'dark',
            position: 'bottom-center',
            autoClose: 2000
        })
    }
    const ViewProduct = (id) => {
        setViewProduct(id)
        navigate('/viewproduct')
    }
    return (
        <div style={{ marginTop: '140px' }}>
            <h1 class='text-center text-success '>Women's Fashion</h1>
            <BrandingHeader />

            <div class='container'>
                <div class='row'>

                    {props.WomenData?.map((item) => (
                        <div key={item.id} class='col md-4 '>
                            <div class='card mb-3 d-flex align-items-center justify-content-center shadow' >
                                <img src={item.thumbnail} onClick={() => { ViewProduct(item.id) }} class="card-img-top" alt={item.title} title='Click to view product' style={{ height: '200px', width: '200px', cursor: 'pointer' }} />
                                <div class='card-body text-center'>
                                    <h6 class='card-title' style={{ marginBottom: '0px' }}>
                                        {item.brand}</h6>
                                    <h6 class='card-text' style={{ marginBottom: '0px' }}>{SortTitle(item.title)}</h6>
                                    <p class='card-text' style={{ marginBottom: '0px' }}>
                                        ${item.price}
                                    </p>
                                    <div>
                                        <Rating name="read-only" value={item.rating} readOnly />
                                    </div>
                                    {cartId.includes(item.id) ? <div><button className='btn btn-primary' onClick={() => { navigate('/cart') }}>Go to cart</button> <p style={{ marginBottom: '2px' }}>Item added to cart</p></div> :
                                        <button class='btn btn-primary' onClick={() => AddCartItem(item.id)}>Add to cart</button>}                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <ToastContainer />
            </div>
        </div>
    )
}

export default WomenCards
