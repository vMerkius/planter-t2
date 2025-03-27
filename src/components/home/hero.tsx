import GreenButton from "../UI/btn-green";
import heroImg from "/assets/images/hero.png";

const Hero = () => {
  return (
    <section className="flex my-10 items-center">
      <div className="text-[#3A6150] flex flex-col gap-6 justify-start items-start flex-1">
        <h1 className="text-4xl font-bold">Lorem ipsum dolor sit amet</h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Lorem ipsum dolor sit amet</h2>
          <p className="text-sm w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ab
            commodi ex inventore suscipit tempore ea voluptatum a quaerat nihil
            veniam officia expedita aliquid. Aspernatur soluta quas ducimus
            molestiae necessitatibus!
          </p>
        </div>
        <GreenButton className="py-2 px-11 inline-block">
          <span>Buy now</span>
        </GreenButton>
      </div>

      <img src={heroImg} alt="Leafs image" className="flex-1" />
    </section>
  );
};

export default Hero;
