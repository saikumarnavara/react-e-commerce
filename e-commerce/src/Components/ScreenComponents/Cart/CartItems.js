import React, { useEffect, useState, useContext } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { cartStore } from '../../../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import BrandingHeader from '../../Containers/NavBar/BrandingHeader';
const CartItems = (props) => {
    const navigate = useNavigate();
    const [cartId, setCardId, setCartItemCount] = useContext(cartStore);
    const Products = props?.prodData;
    const [cartData, setCartData] = useState(cartId);
    const [price, setPrice] = useState(0)

    const RemoveCartItems = (item) => {
        const CartItem = cartData.filter((id) => id !== item)
        setCartData(CartItem)
        toast('Item Removed', {
            theme: 'dark',
            position: 'bottom-center',
            type: 'success',
            autoClose: 2000
        })
    }

    useEffect(() => {
        setCardId(cartData)

    }, [cartData])

    useEffect(() => {
        const TotalPrice = () => {
            const total = [];
            cartData?.map((id) => (
                Products?.map((item) => {
                    if (item.id === id) {
                        total.push(item.price)
                    }

                })
            ))
            const sum = total.reduce((TOTAL, Num) => TOTAL + Num, 0);
            setPrice(sum)
        }
        TotalPrice()
    }, [cartData])


    const Back = () => {
        navigate(-1);
    }
    const removeItemfromCart = (item) => {
        const CartItem = cartData.filter((id) => id !== item)
        setCartData(CartItem)
    }

    if (cartData.length === 0) {
        return (
            <div class='container text-center my-5'>
                <h1>Your cart is empty</h1>
                <h4 onClick={Back} style={{ cursor: 'pointer' }}>Go back..</h4>
            </div>
        )
    }

    //write  a functionaly f increase quantity in cart page ....testing code
    const IncreaseCartItem = (item) => {
        const CartItem = cartData.filter((id) => id !== item)
        setCartData(CartItem)
    }
    const DecreaseCartItem = (item) => {
        const CartItem = cartData.filter((id) => id !== item)
        setCartData(CartItem)
    }


    return (
        <div class='container'>
            <BrandingHeader />

            <h1 className='text-center text-success'>Shopping Cart</h1>
            <div class='row'>
                <div class='col md-4'>
                    {cartData?.map((id) => (
                        Products?.map((product) => {
                            if (product.id === id) {
                                return (
                                    <div className='card shadow d-flex my-2' key={id}>

                                        <div className='card-body'>
                                            <div className='row'>
                                                <div className='col d-flex flex-column justify-content-center'>
                                                    <img src={product.thumbnail} alt={product.title} className='img-fluid' style={{ height: '100px', width: '100px' }} />
                                                </div>
                                                <div className='col d-flex flex-column justify-content-center'>
                                                    {product.brand}
                                                </div>
                                                <div className='col d-flex flex-column justify-content-center'>
                                                    ${product.price}
                                                </div>
                                                <div className='col d-flex flex-column justify-content-center'>
                                                    {product.discountPercentage}% off
                                                </div>
                                                <div className='col d-flex flex-column justify-content-center'>
                                                    {/* write a logic to increase the cart value */}
                                                    <button onClick={() => { setCartData([...cartData, product.id]) }}>+</button>
                                                    <button onClick={() => { removeItemfromCart(product.id) }}>-</button>
                                                </div>
                                                <div className='col d-flex flex-column justify-content-center'>
                                                    <h3 onClick={() => { RemoveCartItems(product.id) }}><AiFillDelete /></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            else {
                                return null
                            }
                        })
                    )

                    )}
                </div>
            </div>
            <div className='row'>
                <div className='col text-end'>
                    <h5>Total Price:${price}</h5>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CartItems


