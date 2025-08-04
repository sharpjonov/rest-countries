import "./header.css";
import moon from "../../assets/images/half-moon.svg";

function Header({ theme, setTheme }) {
  const handleBtn = () => {
    setTheme(!theme);
  };

  return (
    <>
      <header
        className={theme ? "bg-[#2B3844] text-white" : "bg-white text-black"}
      >
        <div className="container">
          <div className="header__inner">
            <div className="header__left">
              <h1 className="header__left__title">Where in the world?</h1>
            </div>
            <div className="header__right">
              <button
                onClick={handleBtn}
                className="header__right__link flex items-center gap-[8px]"
              >
                <img src={moon} width={16} height={16} />
                Dark Mode
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
