import style from "./Home.module.css";
import banner from "../assets/img/banner.png";
import clothes from '../assets/img/clothes.jpg';
import libkos from '../assets/img/libkos.jpg';
import other from '../assets/img/other.jpg'

export default function Home() {
  return (
    <>
      <div className={style.home_wrapper}>
        <img className={banner_home} src={banner} alt="banner_wanderlust" />
        <div className={style.categories}>
          <ul className={style.categories_list}>
            <li className={style.categories_items}><img src={clothes} alt="" /></li>
            <li className={style.categories_items}><img src={libkos} alt="" /></li>
            <li className={style.categories_items}><img src={other} alt="" /></li>
          </ul>
        </div>
      </div>
    </>
  );
}
