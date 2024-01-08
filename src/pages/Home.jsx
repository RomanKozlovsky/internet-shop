import style from "./Home.module.css";
import banner from "../assets/img/banner.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className={style.home_wrapper}>
        <img className={style.banner_home} src={banner} alt="banner_wanderlust" />
        <div className={style.categories}>
          <Link className={style.categories_item_clothes} to="clothes">
            <p>CLOTHES</p>
          </Link>
          <Link className={style.categories_item_libkos} to="libkos">
            <p>LIBKOS</p>
          </Link>
          <Link className={style.categories_item_other} to="*">
            <p>OTHERS</p>
          </Link>
        </div>
      </div>
    </>
  );
}
