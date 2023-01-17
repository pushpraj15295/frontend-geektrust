import React, { useContext } from "react";
import styles from "../Styles/Navbar.module.css";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
const Navbar = () => {
  let navigate = useNavigate();
  const {count} = useContext(AppContext)
  return (
    <nav className={styles.navbar}>
      <div>
        <h3>TeeRax Store</h3>
      </div>
      <div className={styles.navbar_cart}>
        <u>
          <h3 className={styles.navbar_prod} onClick={() => navigate("/")}>Products</h3>
        </u>&nbsp;&nbsp;&nbsp;
        <div
          className={styles.navbar_cart_icon}
          onClick={() => navigate("/cart")}
        >
          <BsCart3 size="25px" />
          <p className={styles.navbar_cart_count}>{count}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
