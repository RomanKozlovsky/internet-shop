import React from "react";
import style from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../contexts/GlobalContext";

export default function Product() {
  const { oneProduct, modal, cart } = useStore();
  const [countProduct, setCountProduct] = React.useState(1);
  const [currentSize, setCurrentSize] = React.useState('');
  const [choiseSize, setChoiseSize] = React.useState(false);
  let params = useParams();

  useEffect(() => {
    fetch(`https://659a8ae0652b843dea53af1f.mockapi.io/items/${params.id}`)
      .then((response) => response.json())
      .then((response) => oneProduct.setProduct(response));
  }, []);

  const currentImg = oneProduct.product.imageUrl;

  function setSize(item) {
    setCurrentSize(item);
    setChoiseSize(!choiseSize);
  }


  function pushCart(array, id) {
    if (!array.length) {
      cart.setCartData([...cart.cartData,
      {
        id: oneProduct.product.id,
        image: oneProduct.product.imageUrl,
        title: oneProduct.product.title,
        price: (oneProduct.product.price * countProduct),
        size: currentSize,
        count: countProduct,
      },
      ])
    } else {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id != id) {
          cart.setCartData([...cart.cartData,
          {
            id: oneProduct.product.id,
            image: oneProduct.product.imageUrl,
            title: oneProduct.product.title,
            price: (oneProduct.product.price * countProduct),
            size: currentSize,
            count: countProduct,
          },
          ])
        } else cart.setCartData(cart.cartData);
      }
    }
  }

  return (
    <>
      <div className={style.product_wrapper}>
        <div className={style.product_item}>
          <img src={currentImg} alt={`${oneProduct.product.title}`} />
          <div className={style.product_description}>
            <h1>{oneProduct.product.title}</h1>
            {oneProduct.product.size?.map((item) => (
              <span
                className={
                  currentSize == item ? style.product_size_active : style.product_size
                }
                onClick={() => {
                  setSize(item);
                }}
                key={item}
              >
                {item}
              </span>
            ))}
            <p>{oneProduct.product.price}</p>
            <div className={style.countProductBlock}>
              <div
                onClick={() => setCountProduct(countProduct - 1)}
                className={style.countProduct_btn}
              >
                -
              </div>
              <div className={style.countProduct_counter}>
                {countProduct < 1 ? setCountProduct(1) : countProduct}
              </div>
              <div
                onClick={() => setCountProduct(countProduct + 1)}
                className={style.countProduct_btn}
              >
                +
              </div>
            </div>
            <button
              disabled={!currentSize}
              onClick={() => (pushCart(cart.cartData, oneProduct.product.id),
                modal.setIsOpenModal(true)
              )}
              className={style.addToCart}
            >
              Add to cartddd
            </button>
          </div>
        </div>
      </div >
    </>
  );
}
