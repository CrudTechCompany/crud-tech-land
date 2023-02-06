import style from "./HeaderContent.module.css";
import logo from "../../../assets/header/logo.svg";

const HeaderContent = ()=>{
    return (
        <div className={style["header-content"]}>
            <img className={style["logo"]} src={logo} alt=""/>
            <div className={style["menu"]}>
                <span>About</span>
                <span>Services</span>
                <span>Projects</span>
            </div>
            <button className={style["button"]}>Contact us</button>
        </div>
    );
}
export default HeaderContent;