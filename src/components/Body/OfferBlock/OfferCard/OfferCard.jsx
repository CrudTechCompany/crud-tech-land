import style from "./OfferCard.module.css";

const OfferCard = (props) => {
  return (
    <div className={style["card-block"]}>
      <div className={style["content"]}>
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
      </div>
    </div>
  );
};

export default OfferCard;
