import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { store } from '../../App';
import MenCards from '../ScreenComponents/MenFashion/MenCards';
import ScrollButton from '../Containers/ScrollToTop/ScrollUp';
const MenScreen = () => {
    const [data, setData, menData, setMenData] = useContext(store)
    const MenFashion = data;
    const MenItems = []
    MenFashion?.map((items) => {
        if (items?.category === 'mens-shirts' || items?.category === 'mens-shoes' || items?.category === 'mens-watches') {
            MenItems.push(items)
        }
    })

    return (
        <div>
            <MenCards data={MenItems} />
            <ScrollButton />
        </div>
    )
}

export default MenScreen
