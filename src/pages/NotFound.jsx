import style from "./Home.module.css";
import error from "../assets/img/404.jpg";

export default function NotFound() {
  return (
    <div className={style.home_wrapper}>
      <div className={style.error404}>
        <img src={error} alt="error 404" />
      </div>
    </div>
  );
}
