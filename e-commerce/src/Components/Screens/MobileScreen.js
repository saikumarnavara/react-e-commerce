import React, { useContext } from 'react'
import MobileCards from '../ScreenComponents/Mobiles/MobileCards';
import { store } from '../../App';
const MobileScreen = () => {
    const [data] = useContext(store)
    const mobiles = data;
    const mobilesData = []
    mobiles?.map((product) => {
        if (product.category === 'smartphones' || product.category === 'laptops') {
            mobilesData.push(product)
        }
    })
    return (
        <div>
            <MobileCards MobilesData={mobilesData} />
        </div>
    )
}

export default MobileScreen
