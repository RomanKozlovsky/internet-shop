import React, { useEffect } from "react";
import { CurrentPrice } from "../App";
import style from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useStore } from "../contexts/GlobalContext";

export default function Product() {
  const { currentProduct } = useStore();

  const { currentPrice } = React.useContext(CurrentPrice);
  const [countProduct, setCountProduct] = React.useState(1);
  const currentImg = currentProduct.currentProduct.imageUrl;

  let params = useParams();

  useEffect(() => {
    fetch(`https://659a8ae0652b843dea53af1f.mockapi.io/items/${params.id}`)
      .then((response) => response.json())
      .then((response) => currentProduct.setCurrentProduct(response));
  }, [params.id]);

  if (!currentProduct.currentProduct) {
    return "loading...";
  }

  return (
    <>
      <div className={style.product_wrapper}>
        <div className={style.product_item}>
          <img src={currentImg} alt={`${currentProduct.currentProduct.title}`} />
          <div className={style.product_description}>
            <h1>{currentProduct.currentProduct.title}</h1>
            {currentProduct.currentProduct.size?.map((item) => (
              <span key={item} className={style.product_size}>
                {item}
              </span>
            ))}
            <p>
              {currentPrice === "UAH" ? (
                <b>{currentProduct.currentProduct.price * countProduct} UAH</b>
              ) : (
                <b>{((currentProduct.currentProduct.price / 38) * countProduct).toFixed(2)} USD</b>
              )}
            </p>
            <div className={style.countProductBlock}>
              <div onClick={() => setCountProduct(countProduct - 1)} className={style.countProduct_btn}>
                -
              </div>
              <div className={style.countProduct_counter}>{countProduct < 1 ? setCountProduct(1) : countProduct}</div>
              <div onClick={() => setCountProduct(countProduct + 1)} className={style.countProduct_btn}>
                +
              </div>
            </div>
            <button className={style.addToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
