import React, { createContext, useEffect, useState } from "react";
import './App.css';
import routes from "./routes";
import Navbar from "./Components/Containers/NavBar/Navbar";
import { FetchApiData } from "./services/apiService";
export const store = createContext()
export const cartStore = createContext()
export const viewItem = createContext()
export const wishListItems = createContext()
function App() {
  const [data, setData] = useState(null);
  const [menData, setMenData] = useState(null)
  const [cartId, setCardId] = useState([])
  const [viewProduct, setViewProduct] = useState('')
  const [wishList, setWishList] = useState([])

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await FetchApiData();
        setData(data.products)
      }
      catch (error) {
        console.error('fetching the data failed', error)
      }
    }
    fetch();
  }, [])
  const ContextValues = [data, setData, menData, setMenData]
  const CartValues = [cartId, setCardId,]
  const viewProductVal = [viewProduct, setViewProduct]
  const wishListVal = [wishList, setWishList]

  return (
    <div className="App">
      <store.Provider value={ContextValues}>
        <cartStore.Provider value={CartValues}>
          <viewItem.Provider value={viewProductVal}>
            <wishListItems.Provider value={wishListVal}>
              <Navbar />
              {routes}
            </wishListItems.Provider>
          </viewItem.Provider>
        </cartStore.Provider>
      </store.Provider>
    </div>
  );
}

export default App;
