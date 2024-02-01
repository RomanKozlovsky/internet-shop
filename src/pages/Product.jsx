import React from "react";
import style from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../contexts/GlobalContext";
import { Dialog } from "@headlessui/react";

export default function Product() {
  const [countProduct, setCountProduct] = React.useState(1);
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  let params = useParams();

  const { oneProduct } = useStore();

  useEffect(() => {
    fetch(`https://659a8ae0652b843dea53af1f.mockapi.io/items/${params.id}`)
      .then((response) => response.json())
      .then((response) => oneProduct.setProduct(response));
  }, []);

  const currentImg = oneProduct.product.imageUrl;

  return (
    <>
      <div className={style.product_wrapper}>
        <div className={style.product_item}>
          <img src={currentImg} alt={`${oneProduct.product.title}`} />
          <div className={style.product_description}>
            <h1>{oneProduct.product.title}</h1>
            {oneProduct.product.size?.map((item) => (
              <span key={item} className={style.product_size}>
                {item}
              </span>
            ))}
            <p>{oneProduct.product.price}</p>
            <div className={style.countProductBlock}>
              <div onClick={() => setCountProduct(countProduct - 1)} className={style.countProduct_btn}>
                -
              </div>
              <div className={style.countProduct_counter}>{countProduct < 1 ? setCountProduct(1) : countProduct}</div>
              <div onClick={() => setCountProduct(countProduct + 1)} className={style.countProduct_btn}>
                +
              </div>
            </div>
            <button onClick={() => setIsOpenModal(true)} className={style.addToCart}>
              Add to cart
            </button>
            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)}>
              <div className={style.modal_bg}>
                <Dialog.Panel className={style.popup}>
                  <Dialog.Title>Cart</Dialog.Title>
                  <p>Lorem ipsum dolor</p>
                  <button onClick={() => setIsOpenModal(false)}>Close Cart</button>
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
