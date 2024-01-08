import style from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={style.wrapper_footer}>
        <div className={style.footer_body}>
          <div className={style.left_items}>
            <span>© Wanderlust 2024</span>
            <span>Offer contract</span>
            <span>Privacy Policy</span>
            <span>Delivery and payment</span>
          </div>
          <div className={style.right_items}>
            <span>info@wanderlust.com.ua</span>
          </div>
        </div>
      </div>
    </>
  );
}
