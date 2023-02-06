import style from "./First.module.css";
import mobile_app from "../../../../../assets/service-block/mobile_app.svg";

const First = () => {
  return (
    <div className={style["card"]}>
      <div className={style["content"]}>
        <img src={mobile_app} alt="" />
        <h3>Mobile Applications</h3>
        <h4>Full-cycle end-to-end mobile development</h4>
      </div>
    </div>
  );
};

export default First;
