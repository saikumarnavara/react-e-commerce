import React, { useContext } from 'react'
import { store } from '../../App'
import BeautyCards from '../ScreenComponents/Beauty&Grooming/BeautyCards';
import ScrollButton from '../Containers/ScrollToTop/ScrollUp'; import GroceryCards from '../ScreenComponents/Grocery/GroceryCards'
const GroceryScreen = () => {
    const [data] = useContext(store)
    const GroceryProducts = data;
    const GroceryData = []
    console.log(data, 'sai')
    GroceryProducts?.map((product) => {
        if (product.category === 'groceries') {
            GroceryData.push(product)
        }
    })
    return (
        <div>
            <GroceryCards grocery={GroceryData} />
        </div>
    )
}

export default GroceryScreen
