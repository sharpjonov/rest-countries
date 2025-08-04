import { useState } from "react";
import "./form.css";
import LoopDark from "../../assets/images/loop_dark.svg";
import LoopLight from "../../assets/images/loop_light.svg";

function Form() {
  const [region, setRegion] = useState("");

  return (
    <div className="hero__top">
      <div className="hero__left">
        <img
          src={LoopDark}
          alt="loop"
          className="hero__left__img"
          width="18"
          height="18"
        />
        <input
          className="hero__left__input"
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      <div className="hero__right">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="hero__right__select"
        >
          <option value="" disabled>
            Filter by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Form;
