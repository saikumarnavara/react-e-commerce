import { Box, MenuItem, Modal } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { viewItem, store } from '../../../App'
const ProductCompare = () => {
    const [viewProduct, setViewProduct] = useContext(viewItem)
    const [data] = useContext(store)
    const item = viewProduct;
    const Products = data;
    const [compareId, setCompareId] = useState([item])
    const [compareProduct, setCompareProduct] = useState([])
    const [category, setCategory] = useState('')
    const [selectedOption, setSelectedOption] = useState([])

    const GetCompareProducts = () => {
        Products?.map((product) => {
            compareId?.map((id) => {
                if (product.id === id) {
                    setCategory(product.category)
                    setCompareProduct([...compareProduct, product])
                }
            })
        })
    }
    useEffect(() => {
        GetCompareProducts();
    }, [])

    const list_a = []
    Products?.map((product) => {
        if (product.category === category) {
            list_a.push(product)
        }
    })

    const handleSelectChange = (event) => {
        setSelectedOption([...selectedOption, event.target.value])
        console.log(selectedOption, 'sr')
    }

    const SetComparsionData = () => {
        selectedOption?.map((id) => {
            setCompareProduct([...compareProduct, Products[id]])
        })

    }
    useEffect(() => {
        SetComparsionData();
    }, [selectedOption])

    useEffect(() => {
        const getLocalStorageData = localStorage.getItem('viewId')
        if (getLocalStorageData) {
            setViewProduct(parseInt(getLocalStorageData))
        }
    }, [])
    console.log(viewProduct, 'sai')

    return (
        <div style={{ marginTop: '120px' }}>
            <h1>compare screen</h1>

            <div>
                <select class="form-select" aria-label="Default select example" value={selectedOption} onChange={handleSelectChange}>
                    <option selected>Open this select menu</option>
                    {list_a.map((item) => (
                        <option value={item.id}>{item.title}</option>
                    ))}
                </select>
            </div>

            <div className='container'>
                <table class="table text-left">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Brand</th>
                            <th>Discount</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {compareProduct?.map((product, index) => (

                            <tr key={index}>
                                <td>{product.brand}</td>
                                <td>{product.price}</td>
                                <td>{product.discountPercentage}</td>
                                <td>{product.rating}</td>
                                <td>{product.stock}</td>
                            </tr>
                        ))}
                    </tbody>

                </table>




            </div>
        </div>
    )
}

export default ProductCompare
