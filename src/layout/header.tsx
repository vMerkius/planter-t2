import { Link } from "react-router";
import { navOptions } from "../constants/nav-options";
import logoIcon from "/assets/images/logo.svg";
import searchIcon from "/assets/images/search.svg";
import arrowDownIcon from "/assets/images/arrow-down.svg";

import VerticalLine from "../components/UI/vertical-line";
import { Fragment, useState } from "react";
import Input from "../components/UI/input";
import GreenButton from "../components/UI/btn-green";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="flex justify-between items-center bg-white px-[4rem] py-[1rem]">
      <div className="flex gap-40">
        <Link to="/" aria-label="Go to homepage">
          <img src={logoIcon} alt="PlantMe logo" className="h-8 w-8" />
        </Link>
        <nav aria-label="Main Navigation">
          <ul className="flex text-[#111] justify-center items-center gap-3">
            {navOptions.map((option) => {
              return (
                <Fragment key={option.name}>
                  <li className="">
                    <Link to={option.link}>{option.name}</Link>
                  </li>
                  <VerticalLine />
                </Fragment>
              );
            })}
            <li>
              <button
                aria-haspopup="listbox"
                aria-expanded="false"
                aria-label="Select language"
                className="flex items-center gap-2"
              >
                <span>Eng</span>
                <img
                  src={arrowDownIcon}
                  alt=""
                  aria-hidden="true"
                  className="w-6 h-6"
                />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center h-11">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <Input
          id="search"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search this site"
          className="w-[22rem] border-[#3A6150] border-2 focus:outline-[#4d61d5]"
        />
        <GreenButton className="h-full w-11" aria-label="Submit search">
          <img src={searchIcon} alt="Logo" className="h-8 w-8 cursor-pointer" />
        </GreenButton>
      </div>
    </header>
  );
};

export default Header;
