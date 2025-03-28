import { Link } from "react-router-dom";
import GreenButton from "../components/UI/btn-green";
import InputWithoutBorder from "../components/UI/input-without-border";
import { navOptions } from "../constants/nav-options";
import HorizontalLine from "../components/UI/horizontal-line";
import mastercardImg from "/assets/images/mastercard.png";
import visaImg from "/assets/images/visa.png";
import { useState } from "react";

const Footer = () => {
  const [newsletter, setNewsletter] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newsletter);
  };
  return (
    <footer className="flex flex-col px-[4rem] pt-[2rem] bg-white">
      <div className="flex justify-between font-light">
        <div
          role="region"
          aria-labelledby="footer-newsletter"
          className="flex flex-col gap-6"
        >
          <span id="footer-newsletter" className="text-4xl font-extrabold">
            PlantMe
          </span>
          <p className="text-base">
            Subscribe and be the first to know about our news and promotions.
          </p>
          <form className="flex gap-6 justify-between" onSubmit={handleSubmit}>
            <label htmlFor="newsletter" className="sr-only">
              Email address
            </label>
            <InputWithoutBorder
              id="newsletter"
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setNewsletter(e.target.value);
              }}
              placeholder="example@gmail.com"
              aria-label="Email address"
              className="w-full"
              value={newsletter}
            />
            <GreenButton
              type="submit"
              className="py-3 px-11 inline-block font-light"
            >
              <span>Subscribe</span>
            </GreenButton>
          </form>
        </div>
        <nav role="navigation" aria-label="Footer navigation">
          <ul className="flex flex-col gap-3 text-sm">
            {navOptions.map((option) => (
              <Link
                to={option.link}
                key={option.name}
                className="hover:underline"
              >
                {option.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div
          role="region"
          aria-labelledby="footer-contact"
          className="flex flex-col gap-2 text-sm"
        >
          <p id="footer-contact">Contacts</p>
          <a href="tel:+380630720121" className="text-gray-600 hover:underline">
            +38 063 072 0121
          </a>
          <a
            href="mailto:plantme.store@gmail.com"
            target="_blank"
            className="text-gray-600 underline"
          >
            plantme.store@gmail.com
          </a>
          <div className="flex gap-4 items-center mt-4">
            <img src={visaImg} alt="Visa logo" className="h-6 w-auto" />
            <img
              src={mastercardImg}
              alt="Mastercard logo"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </div>
      <HorizontalLine />
      <div className="flex justify-between items-center text-sm pb-6 pt-2 relative">
        <p className="text-center w-full">
          © 2022 PlantMe. All rights reserved.
        </p>
        <ul className="flex items-center gap-6 text-nowrap text-gray-400 absolute right-0">
          <li>
            <Link className="hover:underline" to="/privacy-policy">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link className="hover:underline" to="/terms-of-service">
              Terms of Service
            </Link>
          </li>
          <li>
            <button
              className="hover:cursor-pointer"
              aria-label="Change language"
            >
              Language
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
