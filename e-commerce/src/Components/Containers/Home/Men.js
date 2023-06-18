import React, { useContext } from 'react'
import { store } from '../../../App'
const Men = () => {
    const [data, setData] = useContext(store)
    console.log('dummy', data.products)
    return (
        <div>
            men
        </div>
    )
}

export default Men
