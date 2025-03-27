import { cardsData } from "../../constants/cards-data";
import Card from "./card";

const About = () => {
  return (
    <section className="bg-white px-[4rem] flex gap-4 justify-center py-16">
      {cardsData.map((card) => (
        <Card
          key={card.title}
          img={card.img}
          title={card.title}
          description={card.description}
        ></Card>
      ))}
    </section>
  );
};

export default About;
