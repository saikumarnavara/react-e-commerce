import { useContext, useEffect, useState } from "react"
import React from 'react'
import { store, viewItem } from "../../App"
const ViewProduct = () => {

  const [viewProduct] = useContext(viewItem)
  const [data] = useContext(store)
  const productsData = data;
  const ItemId = viewProduct
  console.log(productsData, 'product')
  const img = []
  const [image, setImage] = useState(img)

  const handleMainImage = (prop) => {
    setImage(prop)
  }

  return (
    <div>
      <h1>view product</h1>
      {productsData?.map((product) => {
        if (product.id === ItemId) {
          img.push(product.thumbnail)
          return (
            <div className="container d-flex col" key={product.id} style={{ marginTop: '120px' }}>

              <div className="container d-flex" style={{ width: '100px' }}>
                <div className="card shadow my-2 ">
                  {product.images?.map((image) => {
                    return (
                      <div className="col">
                        <img src={image} alt={product.brand} onClick={() => { handleMainImage(image) }} style={{ height: '60px', width: '60px' }} />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="container d-flex ">
                <div className="card shadow">
                  <div>
                    <img src={image} alt='img' style={{ height: '400px', width: '400px' }} />
                  </div>
                </div>
              </div>
            </div>

          )

        }
      })}
    </div >
  )
}

export default ViewProduct
