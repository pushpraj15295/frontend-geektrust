import React, { useState } from "react";
import { useEffect } from "react";
import styles from "../Styles/Product.module.css";
import {
  FilterByAll,
  FilterColor,
  FilterColorAndGender,
  FilterColorAndType,
  FilterColorGenderAndPrice,
  FilterColorPriceAndType,
  FilterGender,
  FilterGenderAndPrice,
  FilterGenderAndType,
  FilterGenderColorAndType,
  FilterPrice,
  FilterPriceAndColor,
  FilterPriceAndType,
  FilterPriceGenderAndType,
  FilterType,
} from "../utils/functionality";
const Filter = ({ product, filterProduct, setFilterProduct }) => {
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState([]);
  const [type, setType] = useState("");
  // filter by color
  const handleColor = (e) => {
    let newColor = e.target.value;
    let allColor = [...color];
    let checkIndex = allColor.indexOf(newColor);
    if (checkIndex !== -1) {
      allColor.splice(checkIndex, 1);
      setColor(allColor);
    } else {
      allColor.push(newColor);
      setColor(allColor);
    }
  };

  // filter by age
  const handleGender = (e) => {
    let newGender = e.target.value;
    let allGender = [...gender];

    let checkIndex = allGender.indexOf(newGender);
    if (checkIndex !== -1) {
      allGender.splice(checkIndex, 1);
      setGender(allGender);
    } else {
      allGender.push(newGender);
      setGender(allGender);
    }
  };

  //filter by price
  const handlePrice = (e) => {
    let newPrice = e.target.value;
    let splitPrice = newPrice.split(" ").map(Number);
    setPrice(splitPrice);
  };

  // filter by Type
  const handleType = (e) => {
    let newType = e.target.value;
    let allType = [...type];

    let checkIndex = allType.indexOf(newType);
    if (checkIndex !== -1) {
      allType.splice(checkIndex, 1);
      setType(allType);
    } else {
      allType.push(newType);
      setType(allType);
    }
  };

  // console.log(color,type,price,gender)

  useEffect(() => {
    if (
      price.length > 0 &&
      color.length > 0 &&
      gender.length > 0 &&
      type.length > 0
    ) {
      let result = FilterByAll(product, price, color, gender, type);
      setFilterProduct(result);
    } else if (color.length > 0 && gender.length > 0 && price.length > 0) {
      let result = FilterColorGenderAndPrice(product, color, gender, price);
      setFilterProduct(result);
    } else if (color.length > 0 && price.length > 0 && type.length > 0) {
      let result = FilterColorPriceAndType(product, color, price, type);
      setFilterProduct(result);
    } else if (price.length > 0 && gender.length > 0 && type.length > 0) {
      let result = FilterPriceGenderAndType(price, gender, type);
      setFilterProduct(result);
    } else if (gender.length > 0 && type.length > 0 && color.length > 0) {
      let result = FilterGenderColorAndType(product, gender, color, type);
      setFilterProduct(result);
    } else if (color.length > 0 && gender.length > 0) {
      let result = FilterColorAndGender(product, color, gender);
      setFilterProduct(result);
    } else if (gender.length > 0 && price.length > 0) {
      let result = FilterGenderAndPrice(product, gender, price);
      setFilterProduct(result);
    } else if (price.length > 0 && type.length > 0) {
      let result = FilterPriceAndType(product, price, type);
      setFilterProduct(result);
    } else if (price.length > 0 && color.length > 0) {
      let result = FilterPriceAndColor(product, price, color);
      setFilterProduct(result);
    } else if (color.length > 0 && type.length > 0) {
      let result = FilterColorAndType(product, color, type);
      setFilterProduct(result);
    } else if (gender.length > 0 && type.length > 0) {
      let result = FilterGenderAndType(product, gender, type);
      setFilterProduct(result);
    } else if (color.length > 0) {
      let result = FilterColor(product, color);
      setFilterProduct(result);
    } else if (gender.length > 0) {
      let result = FilterGender(product, gender);
      setFilterProduct(result);
    } else if (type.length > 0) {
      let result = FilterType(product, type);
      setFilterProduct(result);
    } else if (price.length > 0) {
      let result = FilterPrice(product, price);
      setFilterProduct(result);
    } else {
      setFilterProduct(product);
    }
  }, [color, gender, type, price]);

  return (
    <div className={styles.container_sidebar}>
      <div style={{ width: "80%", margin: "auto" }}>
        <div>
          <h3>Colour</h3>
          <input type={"checkbox"} value="Red" onChange={handleColor} />
          &nbsp;&nbsp;
          <span>Red</span>
          <br />
          <input type={"checkbox"} value="Blue" onChange={handleColor} />
          &nbsp;&nbsp;
          <span>Blue</span>
          <br />
          <input type={"checkbox"} value="Green" onChange={handleColor} />
          &nbsp;&nbsp;
          <span>Green</span>
        </div>
        <br />
        <div>
          <h3>Gender</h3>
          <input
            type={"checkbox"}
            name="Men"
            value="Men"
            onChange={handleGender}
          />
          &nbsp;&nbsp;
          <span>Men</span>
          <br />
          <input
            type={"checkbox"}
            name="Women"
            value="Women"
            onChange={handleGender}
          />
          &nbsp;&nbsp;
          <span>Women</span>
        </div>

        <br />
        <div>
          <h3>Price</h3>
          <input
            type={"checkbox"}
            name=""
            value="0 250"
            onChange={handlePrice}
          />
          &nbsp;&nbsp;
          <span>0-Rs250</span>
          <br />
          <input
            type={"checkbox"}
            name=""
            value="251 450"
            onChange={handlePrice}
          />
          &nbsp;&nbsp;
          <span>Rs251-450</span>
          <br />
          <input
            type={"checkbox"}
            name=""
            value="450 10000"
            onChange={handlePrice}
          />
          &nbsp;&nbsp;
          <span>Rs450</span>
        </div>

        <br />
        <div>
          <h3>Type</h3>
          <input type={"checkbox"} value="Polo" onChange={handleType} />
          &nbsp;&nbsp;
          <span>Polo</span>
          <br />
          <input type={"checkbox"} value="Hoodie" onChange={handleType} />
          &nbsp;&nbsp;
          <span>Hoodie</span>
          <br />
          <input type={"checkbox"} value="Basic" onChange={handleType} />
          &nbsp;&nbsp;
          <span>Basic</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
