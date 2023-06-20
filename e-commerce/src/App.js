import React, { createContext, useEffect, useState } from "react";
import routes from "./routes";
import Navbar from "./Components/Containers/NavBar/Navbar";
import { FetchApiData } from "./services/apiService";
export const store = createContext()
export const cartStore = createContext()
function App() {
  const [data, setData] = useState(null);
  const [menData, setMenData] = useState(null)
  const [cartId, setCardId] = useState([])
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
  const CartValues = [cartId, setCardId]
  return (
    <div className="App">
      <store.Provider value={ContextValues}>
        <cartStore.Provider value={CartValues}>
          <Navbar />
          {routes}
        </cartStore.Provider>
      </store.Provider>
    </div>
  );
}

export default App;
