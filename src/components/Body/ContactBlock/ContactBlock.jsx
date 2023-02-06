import style from "./ContactBlock.module.css";
import plus_icon from "../../../assets/contact-block/plus_icon.svg";
import arrow_icon from "../../../assets/contact-block/arrow_icon.svg";

const ContactBlock = () => {
  return (
    <div className={style["contact-block"]}>
      <span className={style["contact-block-title"]}>Contact us!</span>
      <div className={style["tel-block"]}>
        <div className={style["button-block"]}>
          <img className={style["plus-icon"]} src={plus_icon} alt="" />
          <h4>Let’s do it together </h4>
        </div>
        <div className={style["bottom-block"]}>
          <img
            className={style["bottom-block-arrow"]}
            src={arrow_icon}
            alt=""
          />
          <span className={style["bottom-block-description"]}>
            Here can be your app
          </span>
        </div>
      </div>
    </div>
  );
};
export default ContactBlock;
