import First from "./Cards/First/First";
import Second from "./Cards/Second/Second";
import Third from "./Cards/Third/Third";
import style from "./ServiceBlock.module.css";

const ServiceBlock = () => {
  return (
    <div className={style["service-block"]}>
      <div className={style["content"]}>
        <h2>Our services</h2>
        <div className={style["card-block"]}>
          <First />
          <Second />
          <Third />
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;
