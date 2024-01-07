import style from "./Layout.module.css";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}></div>
      <Header />
      <div className={style.main}>
        <Outlet />
      </div>
      <div className={style.footer}></div>
      <Footer />
    </div>
  );
}
