import style from "./Clothes.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../contexts/GlobalContext";

export default function Clothes() {
  const { allProducts } = useStore();

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
