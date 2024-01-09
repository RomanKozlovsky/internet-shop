import style from "./Clothes.module.css";
import React, { useEffect } from "react";

export default function Clothes() {
  const [testState, setTestState] = React.useState([]);

  useEffect(() => {
    fetch("https://659a8ae0652b843dea53af1f.mockapi.io/items")
      .then((response) => response.json())
      .then((data) => setTestState(data));
  }, []);

  console.log(testState);
  return (
    <>
      <div className={style.wrapper_clothes}>
        {testState.map((item) => (
          <div className={style.clothes_items} key={item.id}>
            <div className={style.clothes_item}>
              <img src={item.imageUrl} alt="image clothes" />
              <p>{item.title.toUpperCase()}</p>
              {/* <p>
                {item.size[0]}, {item.size[1]}, {item.size[2]}, {item.size[3]}
              </p> */}
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
