import style from "./Header.module.css";
import header_logo from "../../assets/img/logo-header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faEuroSign, faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className={style.header_wrapper}>
      <div className={style.header_body}>
        <div className={style.header_items}>
          <div className={style.left_item}>
            <img src={header_logo} alt="wanderlust_logo" />
          </div>
          <div className={style.right_items}>
            <ul>
              <li>+380990411013</li>
              <li>
                <FontAwesomeIcon icon={faUser} />
              </li>
              <li>
                <FontAwesomeIcon icon={faCartShopping} />
              </li>
              <li>
                <FontAwesomeIcon icon={faEuroSign} />
              </li>
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
