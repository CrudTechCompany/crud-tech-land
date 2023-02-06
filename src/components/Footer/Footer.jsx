import style from "./Footer.module.css";
import logo from "../../assets/header/logo.svg";
import upwork from "../../assets/footer/upwork_logo.svg";
import checkbox_off from "../../assets/footer/checkbox_off.svg";
import ContactBlock from "../Body/ContactBlock/ContactBlock";

const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <ContactBlock />
      <div className={style["footer-content"]}>
        <div className={style["content"]}>
          <div className={style["content-block"]}>
            <img className={style["logo"]} src={logo} alt="" />
            <div className={style["about-block"]}>
              <div className={style["link-block"]}>
                <a href="mailto:hello@crud-tech.com">hello@crud-tech.com</a>
                <a href="tel:+48 791 490 146">+48 791 490 146</a>
                <a>
                  <img className={style["upwork-logo"]} src={upwork} alt="" />
                </a>
              </div>
              <div className={style["address-block"]}>
                <span>Dmowskiego 17E</span>
                <span>50-203 Wrocław</span>
                <span>Poland</span>
              </div>
            </div>
          </div>
          <div className={style["form-block"]}>
            <span className={style["form-block-title"]}>
              Get in touch with us
            </span>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <div className={style["checkbox-block"]}>
              <img className={style["checkbox"]} src={checkbox_off} alt="" />
              <label>
                I agree with <a href="#">Privacy Policy</a> of processing my
                personal data
              </label>
            </div>
            <button className={style["send-button"]}>SEND</button>
          </div>
        </div>
        <div className={style["separator"]} />
        <div className={style["bottom-block"]}>
          <span>All rights reserved CRUD-TECH®</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
