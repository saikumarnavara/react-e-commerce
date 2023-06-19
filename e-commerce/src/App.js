import React, { createContext, useEffect, useState } from "react";
import routes from "./routes";
import Navbar from "./Components/Containers/NavBar/Navbar";
import { FetchApiData } from "./services/apiService";
export const store = createContext()
function App() {
  const [data, setData] = useState(null);
  const [menData, setMenData] = useState(null)
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await FetchApiData();
        setData(data)
        setMenData(data)
      }
      catch (error) {
        console.error('fetching the data failed', error)
      }
    }
    fetch();
  }, [])

  const ContextValues = [data, setData, menData, setMenData]


  return (
    <div className="App">
      <store.Provider value={ContextValues}>
        <Navbar />
        {routes}
      </store.Provider>
    </div>
  );
}

export default App;
