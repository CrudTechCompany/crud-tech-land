import style from "./Body.module.css";
import OfferBlock from "./OfferBlock/OfferBlock";
import PossibleBlock from "./PossibleBlock/PossibleBlock";
import ServiceBlock from "./ServiceBlock/ServiceBlock";

const Body = () => {
  return (
    <div className={style["body"]}>
      <PossibleBlock />
      <OfferBlock/>
      <ServiceBlock/>
    </div>
  );
};
export default Body;
