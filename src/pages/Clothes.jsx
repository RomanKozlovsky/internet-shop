import { Context } from "../App";
import style from "./Clothes.module.css";
import React, { useEffect } from "react";

export default function Clothes() {
  const [testState, setTestState] = React.useState([]);

  const { testData, setTestData } = React.useContext(Context); //отримую дані з app.js на пряму, все працює

  useEffect(() => {
    console.log(testData);
    fetch("https://659a8ae0652b843dea53af1f.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setTestState(data));
  }, []);

  function getItemId(id) {
    console.log(id);
  }
  return (
    <>
      <div className={style.wrapper_clothes}>
        {testState.map((item) => (
          <div className={style.clothes_items} key={item.id}>
            <div onClick={() => getItemId(item.id)} className={style.clothes_item}>
              <img src={item.imageUrl} alt="image clothes" />
              <p>{item.title.toUpperCase()}</p>
              <p>
                <b>UAH {item.price}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
