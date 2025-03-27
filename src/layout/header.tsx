import { useNavigate } from "react-router";
import { navOptions } from "../constants/nav-options";
import logoIcon from "/assets/images/logo.svg";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <img
        src={logoIcon}
        alt="Logo"
        onClick={() => {
          navigate("/");
        }}
      />
      <nav>
        <ul>
          {navOptions.map((option) => {
            return (
              <li key={option.name}>
                <a href={option.link}>{option.name}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
