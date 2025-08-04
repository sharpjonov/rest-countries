import "./hero.css";
import "../Card/card.css";
import "../header/header.css";
import Form from "../Form/Form";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";

function Hero({ theme }) {
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
      <main
        className={
          theme ? "bg-[#202C36] text-white" : "bg-[#FAFAFA] text-black"
        }
      >
        <section className="hero">
          <div className="container">
            <div className="hero__inner">
              <Form theme={theme} />
              <div className="hero__bottom">
                {data.map((el) => (
                  <Card
                    key={el.name.common}
                    flags={el.flags.png}
                    capital={el.capital}
                    name={el.name.common}
                    region={el.region}
                    population={el.population}
                    theme={theme}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hero;
