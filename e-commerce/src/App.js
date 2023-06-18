import React, { createContext, useEffect, useState } from "react";
import routes from "./routes";
import { FetchApiData } from "./services/apiService";
export const store = createContext()
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await FetchApiData();
        setData(data)
      }
      catch (error) {
        console.error('fetching the data failed', error)
      }
    }
    fetch();
  }, [])

  const ContextValues = [data, setData]


  return (
    <div className="App">
      <store.Provider value={ContextValues}>
        {routes}
      </store.Provider>
    </div>
  );
}

export default App;
