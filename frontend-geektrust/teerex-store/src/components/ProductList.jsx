import React, { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/Product.module.css";

const ProductList = ({ products }) => {
  const { cart, setCart } = useContext(AppContext);
  // console.log(products)
  const handleAddToCart = (item) => {
    console.log(item);
    if (cart.length === 0) {
      setCart([...cart, item]);
    } else {
      let check = cart?.filter((el) => el.id === item?.id);
      if (check.length > 0) {
        alert("Item already added");
      } else {
        setCart([...cart, item]);
      }
    }
  };
  useEffect(() => {
  },[cart]);
  
  console.log(cart);
  return (
    <div className={styles.container_products}>
      {products?.map((item) => (
        <div className={styles.productItem} key={item.id}>
          <div>
            <img src={item.imageURL} alt={item.name} width="250" height="250" />
          </div>
          <h3>{item.name}</h3>
          <p>{item.gender}</p>

          <h4>₹{item.price}</h4>

          <button
            className={styles.addtocart_btn}
            onClick={() => handleAddToCart(item)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
