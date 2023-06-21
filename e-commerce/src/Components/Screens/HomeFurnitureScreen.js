import React, { useContext, useEffect } from 'react';
import { store } from '../../App';
import HomeFurnicards from '../ScreenComponents/Home&Furniture/HomeFurnicards'
const HomeFurnitureScreen = () => {
    const [data] = useContext(store)
    const HFdata = data;
    const HomeFurniture = []
    HFdata?.map((product) => {
        if (product.category === 'home-decoration' || product.category === 'furniture') {
            HomeFurniture.push(product)
        }
    })


    return (
        <div>
            <HomeFurnicards hfData={HomeFurniture} />
        </div>
    )
}

export default HomeFurnitureScreen
