import { cardsData } from "../../constants/cards-data";
import Card from "./card";

const About = () => {
  return (
    <section
      className="bg-white px-[4rem] flex gap-10 justify-center py-16"
      aria-label="About section"
      aria-labelledby="about-section-title"
    >
      <h2 id="about-section-title" className="sr-only">
        About section with feature cards
      </h2>
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
