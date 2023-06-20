import React, { useContext } from 'react'
import { cartStore } from '../../App'
const WomenScreen = () => {
    const [cartId] = useContext(cartStore);
    console.log(cartId, 'in women')
    return (
        <div>
            WomenScreen
        </div>
    )
}

export default WomenScreen
