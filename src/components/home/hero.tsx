import GreenButton from "../UI/btn-green";
import heroImg from "/assets/images/hero.webp";

const Hero = () => {
  return (
    <section
      className="flex my-10 items-center px-[4rem]"
      aria-label="Main product introduction section"
      aria-labelledby="hero-heading"
    >
      <div className="text-[#3A6150] flex flex-col gap-6 justify-start items-start flex-1">
        <h1 id="hero-heading" className="text-4xl font-bold">
          Lorem ipsum dolor sit amet
        </h1>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl">Lorem ipsum dolor sit amet</h2>
          <p className="text-sm w-10/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ab
            commodi ex inventore suscipit tempore ea voluptatum a quaerat nihil
            veniam officia expedita aliquid. Aspernatur soluta quas ducimus
            molestiae necessitatibus!
          </p>
        </div>
        <GreenButton
          type="button"
          className="py-2 px-11 inline-block rounded-sm"
        >
          <span>Buy now</span>
        </GreenButton>
      </div>

      <img
        src={heroImg}
        alt=""
        aria-hidden="true"
        className="aspect-square max-w-[37.5rem] h-auto object-contain"
      />
    </section>
  );
};

export default Hero;
