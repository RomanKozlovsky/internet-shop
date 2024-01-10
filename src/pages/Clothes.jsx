import { AllProductsContext, CurrentIdContext } from "../App";
import style from "./Clothes.module.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Clothes() {
  const { allProducts, setAllProducts } = React.useContext(AllProductsContext);
  const { currentProductId, setCurrentProductId } = React.useContext(CurrentIdContext);

  useEffect(() => {
    fetch("https://659a8ae0652b843dea53af1f.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setAllProducts(data));
  }, []);


  console.log(currentProductId)
  return (
    <>
      <div className={style.wrapper_clothes}>
        {allProducts.map((item) => (
          <div className={style.clothes_items} key={item.id}>
            <div className={style.clothes_item}>
              <Link onClick={() => setCurrentProductId(item.id)} className={style.clothes_link} to={`product/${item.id}`}>
                <img src={item.imageUrl} alt="image clothes" />
                <p>{item.title.toUpperCase()}</p>
                <p>
                  <b>UAH {item.price}</b>
                </p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
