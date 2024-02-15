import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import banner from "../../assets/img/banner.png";
import CartModal from "../CartModal/CartModal";

export default function Layout() {
  return (
    <div className={style.wrapper}>
      <CartModal />
      <header className={style.header}>
        <Header />
      </header>
      <main className={style.main}>
        <img className={style.banner_home} src={banner} alt="banner_wanderlust" />
        <Outlet />
      </main>
      <footer className={style.footer}>
        <Footer />
      </footer>
    </div>
  );
}
