import React from "react";
import style from "./Product.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useStore } from "../contexts/GlobalContext";
import { Dialog } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Product() {
  const [countProduct, setCountProduct] = React.useState(1);
  let params = useParams();

  const { oneProduct, modal, cart } = useStore();

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
            <button onClick={() => (cart.setCartData([...cart.cartData, oneProduct.product]), modal.setIsOpenModal(true))} className={style.addToCart}>
              Add to cart
            </button>
            <Dialog open={modal.isOpenModal} onClose={() => modal.setIsOpenModal(false)}>
              <div className={style.modal_bg}>
                <Dialog.Panel className={style.popup}>
                  <Dialog.Title>Кошик</Dialog.Title>
                  <div className={style.cart_wrapper}>
                    {cart.cartData.map((index) => (
                      <div key={index.id} className={style.cart_product_block}>
                        <img src={index.imageUrl} alt="" className={style.popup_img} />
                        <div className={style.cart_product_info}>
                          <ul>
                            <li>{index.title}</li>
                            <li>{index.price}</li>
                            <li>{index.size}</li>
                          </ul>
                          <p onClick={() => cart.setCartData(cart.cartData.filter((i) => i.id !== index.id))}>
                            <FontAwesomeIcon icon={faTrash} />
                          </p>
                        </div>
                      </div>
                    ))}
                    <hr />
                    <div className={style.modal_footer}>
                      <p>До сплати:</p>
                      <p>
                        {cart.cartData.map((price) => (
                          <p>{price.price}</p>
                        ))}
                      </p>
                    </div>
                  </div>
                  <button onClick={() => modal.setIsOpenModal(false)}>Close Cart</button>
                </Dialog.Panel>
              </div>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
