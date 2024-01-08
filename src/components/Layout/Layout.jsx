import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import banner from "../../assets/img/banner.png";

export default function Layout() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}></div>
      <Header />
      <div className={style.main}>
        <img className={style.banner_home} src={banner} alt="banner_wanderlust" />
        <Outlet />
      </div>
      <div className={style.footer}></div>
      <Footer />
    </div>
  );
}
