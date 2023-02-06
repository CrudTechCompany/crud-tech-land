import style from "./Second.module.css";
import web_app from "../../../../../assets/service-block/web_app.svg";

const Second = () => {
  return (
    <div className={style["card"]}>
      <div className={style["content"]}>
        <img src={web_app} alt="" />
        <h3>Web<br/>Applications</h3>
        <h4>Web development services in a wide range of technologies</h4>
      </div>
    </div>
  );
};

export default Second;
