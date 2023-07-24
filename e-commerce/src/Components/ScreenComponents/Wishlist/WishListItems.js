import React, { useContext, useEffect, useState } from 'react'
import { wishListItems } from '../../../App'
import { store } from '../../../App'
const WishListItems = () => {
    const [wishList, setWishList] = useContext(wishListItems)
    const [data] = useContext(store)
    const [WishItems, setWishItems] = useState([])

    const AddWishListItems = () => {
        {
            data.map((product) => {
                {
                    wishList.map((item) => {
                        if (item === product.id) {
                            setWishItems(prev => [...prev, product])
                        }
                    }
                    )
                }
            })
        }
    }

    useEffect(() => {
        AddWishListItems()
    }, [wishList])

    if (WishItems.length === 0) {
        return (
            <div>
                <h1>No Items</h1>
            </div>
        )
    }

    console.log(WishItems, 'ddd')
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    {WishItems.map((item) => {
                        return (
                            <div className='card'>
                                <div className='card-body'>
                                    <h5 className='card-title'>{item.name}</h5>
                                    <p className='card-text'>{item.description}</p>
                                    <p className='card-text'>Price: {item.price}</p>
                                </div>
                            </div>
                        )

                    })}
                </div>
            </div>
        </div>
    )
}

export default WishListItems
