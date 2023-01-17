import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import styles from "../Styles/Cart.module.css";
const Cart = () => {
  const { cart, setCart, count, setCount } = useContext(AppContext);
  const [total, setTotal] = useState(0);
  const [q, setQ] = useState(0);
  //delete
  const handleDelete = (id) => {
    let newCart = cart?.filter((el) => el.id !== id);
    setCart(newCart);
  };

  useEffect(() => {
    let t = cart?.reduce((sum, el) => {
      return sum + el.price;
    }, 0);
    setTotal(t);
  }, [total, cart, count, q]);

  if (cart?.length === 0) {
    return <h1 style={{ textAlign: "center" }}>Please Add Product</h1>;
  }
  return (
    <>
      <h1 className={styles.header}>Shopping Cart</h1>
      <br />
      <div className={styles.cart_Container}>
        {cart?.map((el) => (
          <div className={styles.cartBox} key={el.id}>
            <div>
              <img src={el.imageURL} alt={el.name} width="150" height="150" />
            </div>
            <div>
              <h3>{el.name}</h3>
              <h3>₹{el.price}</h3>
            </div>
            <div>
              <select onChange={(e) => setQ(e.target.value)}>
                <option value="1">QTY</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <h1 style={{ textAlign: "center" }}>Total Price = {total}</h1>
      </div>
    </>
  );
};

export default Cart;
