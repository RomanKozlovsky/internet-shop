import style from "./Header.module.css";
import header_logo from "../../assets/img/logo-header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import { useStore } from "../../contexts/GlobalContext";

export default function Header() {
  const { modal } = useStore();

  return (
    <div className={style.header_wrapper}>
      <div className={style.header_body}>
        <div className={style.header_items}>
          <div className={style.left_item}>
            <Link to="/">
              <img src={header_logo} alt="wanderlust_logo" />
            </Link>
          </div>
          <div className={style.right_items}>
            <ul>
              <li>
                <a href="tel:+380 99 041 10 13">+380 99 041 10 13</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faUser} />
              </li>
              <li onClick={() => modal.setIsOpenModal(true)}>
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
              <li>UAH</li>
              <li>
                <FontAwesomeIcon icon={faGlobe} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
