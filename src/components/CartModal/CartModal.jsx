import React from "react";
import ReactDOM from "react-dom";
import style from "./CartModal.module.css";
import { Dialog } from "@headlessui/react";
import { useStore } from "../../contexts/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


export default function CartModal() {
  const portal = document.getElementById("portal");
  const { modal, cart } = useStore();
  const priceSum = [];
  function sumPrice(array) {
    if (array.length === 0) {
      return 0;
    }
    const sumPrice = array.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });
    return sumPrice;
  }

  return ReactDOM.createPortal(
    <Dialog open={modal.isOpenModal} onClose={() => modal.setIsOpenModal(false)}>
      <div className={style.modal_bg}>
        <Dialog.Panel className={style.popup}>
          <Dialog.Title>{cart.cartData.length < 1 ? "Кошик наразі пустий" : "Кошик"}</Dialog.Title>
          <div className={style.cart_wrapper}>
            {cart.cartData.map((index) => (
              <div key={index.id} className={style.cart_product_block}>
                <img src={index.image} alt="product_image" className={style.popup_img} />
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
              {cart.cartData.map((price) => priceSum.push(price.price))}
              <p>{sumPrice(priceSum)} грн</p>
            </div>
          </div>
          <div className={style.modal_footer}>
            <button className={style.modal_btn} onClick={() => modal.setIsOpenModal(false)}>
              Продовжити покупки
            </button>
            <button className={style.modal_btn}>Оформити замовлення</button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>,
    portal
  );
}
