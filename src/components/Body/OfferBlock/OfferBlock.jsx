import style from "./OfferBlock.module.css";
import OfferCard from "./OfferCard/OfferCard";

const OfferBlock = () => {
  const content = [
    {
      title: "Accomodation",
      description:
        "We adapt your business needs to fast-pased digital world and provide the subject matter consultation in a field of web, mobile and business intelligence solutions.",
    },
    {
      title: "Product building",
      description:
        "We combine your ideas and transform them into product working product using the proven expertise and analysis.",
    },
    {
      title: "Maintenance",
      description:
        "We manage and provide full project life-cycle for the agreed implementations. Starting from the business requirements and prototypes, product management and final daliveries in compliance with Agile Framework.",
    },
    {
      title: "Business Intelligence",
      description:
        "We implement BI systems that connect all your data to gain in-depth insights into complex issues and more analyses of your business challenges.",
    },
  ];
  return (
    <div className={style["offer-block"]}>
      <div className={style["content"]}>
        <h2>What do we offer</h2>
        {content.map((el, index) => (
          <OfferCard
            key={index}
            title={el.title}
            description={el.description}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferBlock;
