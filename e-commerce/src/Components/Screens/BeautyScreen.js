import React, { useContext } from 'react'
import { store } from '../../App'
import BeautyCards from '../ScreenComponents/Beauty&Grooming/BeautyCards';
import ScrollButton from '../Containers/ScrollToTop/ScrollUp';
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
            <ScrollButton />
        </div>
    )
}

export default BeautyScreen
