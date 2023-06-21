import React, { useContext, useState } from 'react'
import { cartStore } from '../../../App'
import { SortTitle } from '../../../Utils/Utils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomeFurnicards = (props) => {
    const [clickedId, setClickedId] = useState([])
    const [cartId, setCardId] = useContext(cartStore)
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
    return (
        <div style={{ marginTop: '140px' }}>
            <h1 class='text-center text-success '>Home & Furniture</h1>
            <div class='container'>
                <div class='row'>

                    {props?.hfData?.map((item) => (
                        <div key={item.id} class='col md-4 '>
                            <div class='card mb-3 d-flex align-items-center justify-content-center shadow' >
                                <img src={item.thumbnail} class="card-img-top" alt={item.title} style={{ height: '200px', width: '200px' }} />
                                <div class='card-body text-center'>
                                    <h6 class='card-title'>
                                        {item.brand}</h6>
                                    <h6 class='card-text'>{SortTitle(item.title)}</h6>
                                    <p class='card-text'>
                                        ${item.price}
                                    </p>
                                    <p class='card-text'>
                                        {item.rating}
                                    </p>
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

export default HomeFurnicards
