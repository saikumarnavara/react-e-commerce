import { useContext, useEffect, useState } from "react"
import React from 'react'
import { store, viewItem, cartStore } from "../../App";
import Rating from '@mui/material/Rating';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BrandingHeader from "../Containers/NavBar/BrandingHeader";
const ViewProduct = () => {
  const navigate = useNavigate();
  const [clickedId, setClickedId] = useState([])
  const [cartId, setCardId,] = useContext(cartStore)
  const [viewProduct] = useContext(viewItem)
  const [data] = useContext(store)
  const productsData = data;
  const ItemId = viewProduct
  const img = []
  const [image, setImage] = useState(img)

  const handleMainImage = (prop) => {
    setImage(prop)
  }
  const Back = () => {
    navigate(-1);
  }
  const AddCartItem = (props) => {
    setClickedId([...clickedId, props])
    setCardId([...cartId, props])

    toast('Item Added to cart', {
      type: 'success',
      theme: 'dark',
      position: 'bottom-center',
      autoClose: 2000
    })
  }

  const currentDate = new Date()
  const deliveryDate = new Date(currentDate);
  deliveryDate.setDate(currentDate.getDate() + 4)
  const time = deliveryDate.toLocaleTimeString();
  const day = deliveryDate.toDateString()

  return (
    <div style={{ marginTop: '120px' }}>
      <BrandingHeader />
      <h2 onClick={Back} style={{ padding: '10px', cursor: 'pointer', display: 'flex' }}><BiArrowBack /></h2>

      {productsData?.map((product) => {
        if (product.id === ItemId) {
          img.push(product.thumbnail)
          return (
            <div className="container d-flex col sm-2" key={product.id}>
              <div className="container d-flex" style={{ width: '100px' }}>
                <div className="card shadow my-2">
                  {product.images?.map((image) => {
                    return (
                      <div className="col">
                        <img src={image} alt={product.brand} onClick={() => { handleMainImage(image) }} title='Click to view product' style={{ height: '60px', width: '60px', cursor: 'pointer' }} />
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="container d-flex" style={{ width: '500px' }}>
                <div className="card shadow">
                  <div>
                    <img src={image} alt='img' style={{ height: '400px', width: '400px' }} />
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="card">
                  <div className="card-body" style={{ textAlign: 'left' }} >
                    <h1 className="card-title">{product.brand}</h1>
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">Category:- {product.category}</p>
                    <p className="card-text">{product.description}</p>
                    <Rating name="read-only" value={product.rating} readOnly />
                    <p className="card-text">Stock Available:-{product.stock}</p>
                    <h1 className="card-title">Price:- ${product.price}</h1>
                    <p className="card-text">Discount:- {product.discountPercentage}%</p>
                    <h6 className="card-text">Delivey Expect by:- {day} before {time}</h6>
                  </div>
                  <div class="container" style={{ textAlign: 'left' }}>
                    <button class="btn btn-outline-primary btn-lg" style={{ marginRight: '5px' }}>Buy Now</button>
                    {cartId.includes(product.id) ? <button className='btn btn-outline-primary btn-lg' onClick={() => { navigate('/cart') }}>Go to cart</button> :
                      <button class='btn btn-outline-primary btn-lg' onClick={() => AddCartItem(product.id)} style={{ marginRight: '5px' }}>Add to cart</button>}
                    <button class="btn btn-outline-primary btn-lg" >Compare Product</button>
                  </div>
                </div>
              </div>
            </div>

          )
        }
      })}
      <ToastContainer />
    </div >
  )
}

export default ViewProduct
