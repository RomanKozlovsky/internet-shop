import { AllProductsContext, CurrentIdContext, CurrentPrice } from "../App";
import style from "./Clothes.module.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Clothes() {
  const { allProducts, setAllProducts } = React.useContext(AllProductsContext);
  const { setCurrentProductId } = React.useContext(CurrentIdContext);
  const { currentPrice } = React.useContext(CurrentPrice);
  const USD = [];

  function priceConverter(res) {
    res.forEach((element) => {
      USD.push((element.price / 38).toFixed(2));
    });
    console.log(USD);
    console.log(allProducts);
  }

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
      .then((res) => (currentPrice === "UAH" ? setAllProducts(res) : priceConverter(res)))
      .catch((e) => alert("Помилка отримання даних з серверу"));
  }, []);

  return (
    <>
      <div className={style.wrapper_clothes}>
        {allProducts.map((item) => (
          <div className={style.clothes_items} key={item.id}>
            <div className={style.clothes_item}>
              <Link onClick={() => setCurrentProductId(item.id)} className={style.clothes_link} to={`product`}>
                <img src={item.imageUrl} alt="image clothes" />
                <p>{item.title.toUpperCase()}</p>
                <p>{currentPrice === "UAH" ? <b>{item.price} UAH</b> : <b>{(item.price / 38).toFixed(2)} USD</b>}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
