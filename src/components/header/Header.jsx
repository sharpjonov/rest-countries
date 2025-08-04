import "./header.css";
import moon from "../../assets/images/half-moon.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header__inner">
            <div className="header__left">
              <h1 className="header__left__title">Where in the world?</h1>
            </div>
            <div className="header__right">
              <img src={moon} width={16} height={16} />
              <p className="header__right__link">Dark Mode</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
