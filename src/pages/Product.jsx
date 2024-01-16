import React, { useEffect } from "react";
import { CurrentPrice, CurrentSize } from "../App";
import style from "./Product.module.css";
import { useParams } from "react-router-dom";

export default function Product() {
  const { currentPrice } = React.useContext(CurrentPrice);
  const { setCurrentSize } = React.useContext(CurrentSize);
  const [currentProduct, setCurrentProduct] = React.useState([]);
  const [countProduct, setCountProduct] = React.useState(1);
  const currentImg = currentProduct.imageUrl;

  function selectSize(id) {
    setCurrentSize(id);
  }

  let params = useParams();

  useEffect(() => {
    fetch(`https://659a8ae0652b843dea53af1f.mockapi.io/items/${params.id}`)
      .then((response) => response.json())
      .then((response) => setCurrentProduct(response));
  }, [params.id]);

  if (!currentProduct) {
    return "loading...";
  }

  return (
    <>
      <div className={style.product_wrapper}>
        <div className={style.product_item}>
          <img src={currentImg} alt={`${currentProduct.title}`} />
          <div className={style.product_description}>
            <h1>{currentProduct.title}</h1>
            {currentProduct.size?.map((item) => (
              <span onClick={() => selectSize(item)} key={item} className={style.product_size}>
                {item}
              </span>
            ))}
            <p>
              {currentPrice === "UAH" ? <b>{currentProduct.price * countProduct} UAH</b> : <b>{((currentProduct.price / 38) * countProduct).toFixed(2)} USD</b>}
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
