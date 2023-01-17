import React from "react";
import { IoIosSearch } from "react-icons/io";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import styles from "../Styles/Product.module.css";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { FaFilter } from 'react-icons/fa';
const Product = () => {
  const [query, setQuery] = useState("");
  const { product,filterProduct,setFilterProduct } = useContext(AppContext);

  // search function
  const handleSearch = () => {
    let searchedProduct = product.filter(
      (el) =>
        el.name.toLowerCase() === query.toLowerCase() ||
        el.type.toLowerCase() === query.toLowerCase() ||
        el.color.toLowerCase() === query.toLowerCase()
    );
    setFilterProduct(searchedProduct);
  };

  return (
    <>
      <div className={styles.inputBox}>
        <input
          type="text"
          className={styles.search_input}
          placeholder="search for products..."
          onChange={(e) => setQuery(e.target.value)}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button className={styles.search_btn} onClick={handleSearch}>
          <IoIosSearch />
        </button>&nbsp;&nbsp;&nbsp;
        <button className={styles.filterBtn}><FaFilter/></button>
      </div>
      <br />
      <br />
      <div className={styles.container}>
        <Filter product={product} filterProduct={filterProduct} setFilterProduct={setFilterProduct} />
        <ProductList
          products={filterProduct.length === 0 ? product : filterProduct}
        />
      </div>
    </>
  );
};

export default Product;
