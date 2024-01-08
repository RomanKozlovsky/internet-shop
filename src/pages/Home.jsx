import style from "./Home.module.css";
import banner from "../assets/img/banner.png";

export default function Home() {
  return (
    <>
      <div className={style.home_wrapper}>
        <img src={banner} alt="banner_wanderlust" />
        <div>
          <span>categories</span>
        </div>
      </div>
    </>
  );
}
