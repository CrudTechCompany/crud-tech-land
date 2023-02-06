import style from "./PossibleBlock.module.css";
import rectangle from "../../../assets/possible-block/rectangle.svg";
import mask from "../../../assets/possible-block/mask.svg";
import crane_glass from "../../../assets/possible-block/crane_glass.svg";

const PossibleBlock = () => {
  return (
    <div className={style["possible-block"]}>
      <img className={style["rectangle"]} src={rectangle} alt="" />
      <img className={style["mask"]} src={mask} alt="" />
      <div className={style["content-block"]}>
        <div className={style["content"]}>
          <h1>We make it possible</h1>
          <h4>
            We are mobile and web development experts with the main focus on
            tailored IT products. We can help companies build and grow digital
            solutions that strengthen their business. Let us help you make your
            dream into a reality.
          </h4>
          <button className={style["content-button"]}>Get proposal</button>
        </div>
        <img className={style["block-image"]} src={crane_glass} alt="" />
      </div>
    </div>
  );
};

export default PossibleBlock;
