import style from "./Third.module.css";
import business_intelligence from "../../../../../assets/service-block/business_intelligence.svg";

const Third = () => {
  return (
    <div className={style["card"]}>
      <div className={style["content"]}>
        <img src={business_intelligence} alt="" />
        <h3>Business Intelligence</h3>
        <h4>Flawless and seamless data visualizations</h4>
      </div>
    </div>
  );
};

export default Third;
