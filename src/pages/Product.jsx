// import React from "react";
// import style from "./Product.module.css";
// import { AllProductsContext, CurrentIdContext } from "../App";

// export default function Product() {
//   const { allProducts, setAllProducts } = React.useContext(AllProductsContext);
//   const { currentProductId, setCurrentProductId } = React.useContext(CurrentIdContext);
//   const currentImg = allProducts[currentProductId - 1].imageUrl;

//   return (
//     <>
//       <div className={style.product_wrapper}>
//         <div className={style.product_item}>
//           <img src={currentImg} alt={`${allProducts[currentProductId].title}`} />
//           <div className={style.product_description}>
//             <p>{allProducts[currentProductId - 1].title}</p>
//             <p>{allProducts[currentProductId - 1].size}</p>
//             <p>{allProducts[currentProductId - 1].price}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect } from "react";
import { AllProductsContext, CurrentIdContext } from "../App";
import style from "./Product.module.css";

export default function Product() {
  const { currentProductId } = React.useContext(CurrentIdContext);
  const { allProducts } = React.useContext(AllProductsContext);
  const [currentProduct, setCurrentProduct] = React.useState([]);
  const [countProduct, setCountProduct] = React.useState(0);
  const currentImg = currentProduct.imageUrl;

  useEffect(() => {
    console.log(currentProductId);
    fetch(`https://659a8ae0652b843dea53af1f.mockapi.io/items/${currentProductId}`)
      .then((response) => response.json())
      .then((response) => setCurrentProduct(response));
  }, []);

  return (
    <>
      <div className={style.product_wrapper}>
        <div className={style.product_item}>
          <img src={currentImg} alt={`${currentProduct.title}`} />
          <div className={style.product_description}>
            <h1>{currentProduct.title}</h1>
            <p>{currentProduct.price}</p>
            {currentProduct.size?.map((item) => (
              <span key={allProducts.id} className={style.product_size}>
                {item}
              </span>
            ))}
            <div className={style.countProductBlock}>
              <div onClick={() => setCountProduct(countProduct - 1)} className={style.countProduct_btn}>
                -
              </div>
              <div className={style.countProduct_counter}>{countProduct}</div>
              <div onClick={() => setCountProduct(countProduct + 1)} className={style.countProduct_btn}>
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
