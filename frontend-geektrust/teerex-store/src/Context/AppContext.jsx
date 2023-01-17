import { createContext, useEffect, useState } from "react";
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [cart,setCart] = useState([]);
  const [count,setCount] = useState(0)
  useEffect(() => {
    getProduct();
  }, []);

  // get all product
  const getProduct = async () => {
    let res = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    let data = await res.json();
    setProduct(data);
  };
  useEffect(()=>{
   setCount(cart.length)
  },[cart])

  return (
    <AppContext.Provider value={{ product ,filterProduct,setFilterProduct,cart,setCart,count,setCount}}>{children}</AppContext.Provider>
  );
};
