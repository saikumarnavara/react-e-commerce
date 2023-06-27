import React, { useContext, useEffect } from 'react'
import CartItems from '../ScreenComponents/Cart/CartItems';
import { store } from '../../App';
const Cart = () => {
    const [data, setData] = useContext(store)
    return (
        <div style={{ marginTop: '120px' }}>
            <CartItems prodData={data} />
        </div>
    )
}

export default Cart
