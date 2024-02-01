import React from "react";

export default function useCart() {
  const [cartData, setCartData] = React.useState([]);
  return { cartData, setCartData };
}
