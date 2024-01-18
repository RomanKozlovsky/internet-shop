import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useCurrentProduct() {
  const [currentProduct, setCurrentProduct] = React.useState([]);
  const [productId, setProductId] = React.useState();

  useEffect(() => {
    fetch(`https://659a8ae0652b843dea53af1f.mockapi.io/items/${productId}`)
      .then((response) => response.json())
      .then((response) => setCurrentProduct(response));
  }, [productId]);

  return { currentProduct, setCurrentProduct, setProductId };
}
