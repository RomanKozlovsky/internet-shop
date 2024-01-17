import { AllProductsContext, CurrentPrice } from "../App";
import style from "./Clothes.module.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../contexts/all-products-context";

export default function Clothes() {
  const { allProducts, setAllProducts } = React.useContext(AllProductsContext);

  useEffect(() => {
    fetch("https://659a8ae0652b843dea53af1f.mockapi.io/items")
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          return res;
        } else {
          let error = new Error(res.statusText);
          error.response = res;
          throw error;
        }
      })
      .then((res) => res.json())
      .then((res) => setAllProducts(res))
      .catch((e) => alert("data error"));
  }, []);

  return (
    <>
      <div className={style.wrapper_clothes}>
        {allProducts.map((item) => (
          <div className={style.clothes_items} key={item.id}>
            <div className={style.clothes_item}>
              <Link className={style.clothes_link} to={`${item.id}`}>
                <img src={item.imageUrl} alt="image clothes" />
                <p>{item.title.toUpperCase()}</p>
                <p>{item.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
