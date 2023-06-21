import React, { useContext, useEffect } from 'react';
import WomenCards from '../ScreenComponents/WomenFashion/WomenCards';
import { store } from '../../App'
const WomenScreen = () => {
    const [data] = useContext(store)
    const WomenFashion = data;
    const WomenCardsdata = []
    WomenFashion?.map((product) => {
        if (product.category === 'tops' || product.category === 'womens-dresses' || product.category === 'womens-shoes' ||
            product.category === 'womens-watches' || product.category === "womens-bags" || product.category === 'womens-jewellery') {
            WomenCardsdata.push(product)
        }
    }
    )
    return (
        <div>
            <WomenCards WomenData={WomenCardsdata} />
        </div>
    )
}

export default WomenScreen
