import "./hero.css";
import "../Card/card.css";
import "../header/header.css";
import Form from "../Form/Form";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Hero() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://restcountries.com/v3.1/all?fields=name,population,capital,flags,region,currencies,subregion,languages"
        );
        setData(res.data);
      } catch (err) {
        console.error("Xato yuz berdi:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main>
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <Form />
              <div className="hero__bottom">
                {data.map((el) => (
                  <Card
                    key={el.name.common}
                    flags={el.flags.png}
                    capital={el.capital}
                    name={el.name.common}
                    region={el.region}
                    population={el.population}
                  />
                ))}

                {/* {data.map((el) => {
                  return <CountryInfo key={el.id} el={el} />;
                })} */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;
