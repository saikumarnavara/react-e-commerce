import React, { useContext, useEffect } from 'react';
import { store } from '../../App';
import HomeFurnicards from '../ScreenComponents/Home&Furniture/HomeFurnicards';
import ScrollButton from '../Containers/ScrollToTop/ScrollUp';
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
            <ScrollButton />
        </div>
    )
}

export default HomeFurnitureScreen
