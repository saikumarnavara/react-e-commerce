import React, { createContext, useEffect, useState } from "react";
import './App.css';
import routes from "./routes";
import Navbar from "./Components/Containers/NavBar/Navbar";
import { FetchApiData } from "./services/apiService";
export const store = createContext()
export const cartStore = createContext()
export const viewItem = createContext()
function App() {
  const [data, setData] = useState(null);
  const [menData, setMenData] = useState(null)
  const [cartId, setCardId] = useState([])
  const [viewProduct, setViewProduct] = useState('')
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
  console.log(viewProduct, 'app')

  return (
    <div className="App">
      <store.Provider value={ContextValues}>
        <cartStore.Provider value={CartValues}>
          <viewItem.Provider value={viewProductVal}>
            <Navbar />
            {routes}
          </viewItem.Provider>
        </cartStore.Provider>
      </store.Provider>
    </div>
  );
}

export default App;
