import { createContext, useEffect, useState } from "react";
import axios from "axios";

let apidata = createContext();

// eslint-disable-next-line react/prop-types
const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([]);

  let getdata = () =>
    axios.get("https://dummyjson.com/products?&limit=0").then((response) => {
      setInfo(response.data.products);
    });
  useEffect(() => {
    getdata();
  }, []);

  return <apidata.Provider value={info}>{children}</apidata.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { apidata, ContextApi };
