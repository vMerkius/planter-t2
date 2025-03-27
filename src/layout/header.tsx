import { Link, useNavigate } from "react-router";
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

  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center bg-white px-[4rem] py-[1rem]">
      <div className="flex gap-40">
        <img
          src={logoIcon}
          alt="Logo"
          className="h-8 w-8 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <nav>
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
              <button className="flex items-center gap-2">
                <span>Eng</span>
                <img src={arrowDownIcon} alt="Arrow Down" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-center h-11">
        <Input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placehorder="Search this site"
          className="w-[22rem]"
        />
        <GreenButton className="h-full w-11">
          <img src={searchIcon} alt="Logo" className="h-8 w-8 cursor-pointer" />
        </GreenButton>
      </div>
    </header>
  );
};

export default Header;
