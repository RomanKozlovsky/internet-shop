import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useCurrentProduct() {
  const [currentProduct, setCurrentProduct] = React.useState({});

  let params = useParams();

  useEffect(() => {
    fetch(`https://659a8ae0652b843dea53af1f.mockapi.io/items/${params.id}`)
      .then((response) => response.json())
      .then((response) => setCurrentProduct(response));
  }, [params.id]);

  return currentProduct;
}
