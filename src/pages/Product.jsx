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
import { CurrentIdContext } from "../App";
import style from "./Product.module.css";

export default function Product() {
  const { currentProductId, setCurrentProductId } = React.useContext(CurrentIdContext);
  const [currentProduct, setCurrentProduct] = React.useState([]);
  const currentImg = currentProduct.imageUrl;

  useEffect(() => {
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
            <p>{currentProduct.title}</p>
            <p>{currentProduct.size}</p>
            <p>{currentProduct.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}
