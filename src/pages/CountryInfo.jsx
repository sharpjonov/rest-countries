// import { BiLeftArrowAlt } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import LeftArrow from "../assets/images/left-arrow.svg";

function CountryInfo() {
  const [data, setData] = useState([]);
  const { id } = useParams();

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

  const el = data.find(
    (item) => item.name.common.toLowerCase() === id.toLowerCase()
  );

  return (
    <>
      <Header />
      <section className="pt-[80px] pb-[143px]">
        <div className="container">
          <Link to="/">
            <div className="flex items-center gap-[10px]">
              <img src={LeftArrow} width={20} height={20} alt="LeftArrow" />
              <h3>Back</h3>
            </div>
          </Link>
          {el ? (
            <>
              <div className="pt-[80px] flex gap-[120px] items-center">
                <div>
                  <img
                    width={560}
                    height={401}
                    className="rounded-[6px]"
                    src={el.flags.png}
                    alt=""
                  />
                </div>
                <div>
                  <div className="flex gap-[141px] items-center w-[598px]">
                    <div style={{ width: "207px" }} className="w-[207px]">
                      <h1 className="text-[#111517] font-[800] text-[32px]/[100%] mb-[23px]">
                        {el.name.common}
                      </h1>
                      <p className="font-[600] text-[16px]/[32px] text-[#111517]">
                        Native Name: {""}
                        <span className="font-[300]">
                          {Object.values(el.name.nativeName)[0].common}
                        </span>
                      </p>
                      <p className="font-[600] text-[16px]/[32px] text-[#111517]">
                        Population:{" "}
                        <span className="font-[300]">
                          {el.population.toLocaleString("de-DE")}
                        </span>
                      </p>
                      <p className="font-[600] text-[16px]/[32px] text-[#111517]">
                        Region: <span className="font-[300]">{el.region}</span>
                      </p>
                      <p className="font-[600] text-[16px]/[32px] text-[#111517]">
                        Sub Region:{" "}
                        <span className="font-[300]">{el.subregion}</span>
                      </p>
                      <p className="font-[600] text-[16px]/[32px] text-[#111517]">
                        Capital:{" "}
                        <span className="font-[300]">{el.capital}</span>
                      </p>
                    </div>
                    <div>
                      <p>
                        Top Level Domain:{" "}
                        <span className="font-[300]">.be</span>
                      </p>
                      <p className="font-[600] text-[16px]/[32px] text-[#111517]">
                        Currencies:{" "}
                        <span className="font-[300]">
                          {Object.values(el.currencies)[0].name}
                        </span>
                      </p>
                      <p className="font-[600] text-[16px]/[32px] text-[#111517]">
                        Languages:{" "}
                        <span className="font-[300]">
                          {Object.values(el.languages).join(", ")}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </section>
    </>
  );
}

export default CountryInfo;
