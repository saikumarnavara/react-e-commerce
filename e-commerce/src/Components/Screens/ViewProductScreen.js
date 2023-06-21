import { useContext } from "react"
import React from 'react'
import { store, viewItem } from "../../App"
const ViewProduct = () => {
  const [viewProduct] = useContext(viewItem)
  const [data] = useContext(store)
  const productsData = data;
  const ItemId = viewProduct
  console.log(viewProduct, 'in view')
  console.log(productsData, 'main')
  return (
    <div>
      <h1>view product</h1>
      {productsData?.map((product) => {
        if (product.id === ItemId) {
          return (
            <div className="container" key={product.id} style={{ marginTop: '120px' }}>
              <h5 className="card">{product.title}</h5>
            </div>
          )

        }
      })}
    </div>
  )
}

export default ViewProduct
