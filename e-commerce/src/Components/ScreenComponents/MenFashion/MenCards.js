import React, { useContext, useEffect, useState } from 'react'
import { cartStore, viewItem } from '../../../App'
import { SortTitle } from '../../../Utils/Utils'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
import Rating from '@mui/material/Rating';

const MenCards = (props) => {
    const navigate = useNavigate();
    const [clickedId, setClickedId] = useState([])
    const [cartId, setCardId,] = useContext(cartStore)
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
    console.log(cartId, 'trhis add cart')
    console.log(viewProduct, 'sta')
    return (
        <div style={{ marginTop: '140px' }}>
            <h1 class='text-center text-success '>Men's Fashion</h1>
            <div class='container'>
                <div class='row'>
                    {props?.data?.map((item) => (
                        <div key={item.id} class='col md-4 '>
                            <div class='card mb-3 d-flex align-items-center justify-content-center shadow' >
                                <img src={item.thumbnail} class="card-img-top" onClick={() => { ViewProduct(item.id) }} alt={item.title} style={{ height: '200px', width: '200px' }} />
                                <div class='card-body text-center' >
                                    <h6 class='card-title' style={{ marginBottom: '0px' }}>
                                        {item.brand}</h6>
                                    <h6 class='card-text' style={{ marginBottom: '0px' }}>{SortTitle(item.title)}</h6>
                                    <p class='card-text' style={{ marginBottom: '0px' }}>
                                        ${item.price}
                                    </p>
                                    <Rating name="read-only" value={item.rating} readOnly />
                                    <button class='btn btn-primary' onClick={() => AddCartItem(item.id)}>Add to cart</button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

                <ToastContainer />
            </div>
        </div>
    )
}

export default MenCards
