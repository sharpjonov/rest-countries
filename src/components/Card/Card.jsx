import { Link } from "react-router-dom";
import "./card.css";

function Card({ flags, name, region, population, capital }) {
  return (
    <>
      <Link to={`/CountryInformation/${name}`}>
        <div className="hero__bottom__box">
          <img src={flags} alt="Flag" className="hero__bottom__box__img"></img>
          <h1 className="hero__bottom__box__title">{name}</h1>
          <p className="hero__bottom__box__text">
            Population:{" "}
            <span className="hero__bottom__text__span">
              {population.toLocaleString("de-DE")}
            </span>
          </p>
          <p className="hero__bottom__box__text">
            Region: <span className="hero__bottom__text__span">{region}</span>
          </p>
          <p className="hero__bottom__box__text">
            Capital: <span className="hero__bottom__text__span">{capital}</span>
          </p>
        </div>
      </Link>
    </>
  );
}

export default Card;
