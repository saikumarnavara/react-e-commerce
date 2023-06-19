import React from 'react'
import { useContext } from 'react';
import { store } from '../../App';
import MenCards from '../ScreenComponents/MenFashion/MenCards';
const MenScreen = () => {
    const [data, setData] = useContext(store)
    const MenFashion = data?.products;
    const MenItems = []
    MenFashion?.map((items) => {
        if (items?.category === 'mens-shirts' || items?.category === 'mens-shoes' || items?.category === 'mens-watches') {
            MenItems.push(items)
        }
    })
    return (
        <div>
            <MenCards data={MenItems} />
        </div>
    )
}

export default MenScreen
