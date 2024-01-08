import style from "./Home.module.css";
import banner from "../assets/img/banner.png";
import clothes from "../assets/img/clothes.jpg";
import libkos from "../assets/img/libkos.jpg";
import other from "../assets/img/other.jpg";

export default function Home() {
  return (
    <>
      <div className={style.home_wrapper}>
        <img className={style.banner_home} src={banner} alt="banner_wanderlust" />
        <div className={style.categories}>
          <div className={style.categories_item_clothes}>
            <p>CLOTHES</p>
          </div>
          <div className={style.categories_item_libkos}>
            <p>LIBKOS</p>
          </div>
          <div className={style.categories_item_other}>
            <p>OTHERS</p>
          </div>
        </div>
      </div>
    </>
  );
}
