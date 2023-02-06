import style from "./Header.module.css";
import rectangle from "../../assets/header/rectangle.svg";
import mask from "../../assets/header/mask.svg";
import HeaderContent from "./HeaderContent/HeaderContent";

const Header = () => {
  return (
    <header className={style["header"]}>
      <img className={style["rectangle"]} src={rectangle} alt="" />
      <img className={style["mask"]} src={mask} alt=""/>
      <HeaderContent/>
    </header>
  );
};

export default Header;
