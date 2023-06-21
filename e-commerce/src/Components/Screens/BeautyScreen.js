import React, { useContext } from 'react'
import { store } from '../../App'
import BeautyCards from '../ScreenComponents/Beauty&Grooming/BeautyCards'
const BeautyScreen = () => {
    const [data] = useContext(store)
    const BeautyProducts = data;
    const BeautyData = []
    BeautyProducts?.map((product) => {
        if (product.category === 'fragrances' || product.category === 'skincare') {
            BeautyData.push(product)
        }
    })
    return (
        <div>
            <BeautyCards beauty={BeautyData} />
        </div>
    )
}

export default BeautyScreen
