import React from "react";
import style from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useStore } from "../contexts/GlobalContext";

export default function Product() {
  const { currentProduct } = useStore();
  const [countProduct, setCountProduct] = React.useState(1);
  const currentImg = currentProduct.currentProduct.imageUrl;

  let params = useParams();
  currentProduct.setProductId(params.id);

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
            <p>{currentProduct.currentProduct.price}</p>
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
