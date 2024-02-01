import React from "react";

export default function useModal() {
  const [isOpenModal, setIsOpenModal] = React.useState(false);
  return { isOpenModal, setIsOpenModal };
}
