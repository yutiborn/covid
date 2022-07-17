import React, { useState, useEffect } from "react";
import "./Most.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Most = ({ data, time, countries }) => {
  const navigate = useNavigate();
  const [mostCountries, setMostCountries] = useState(countries);
  function sortByKey(array, key) {
    return array.sort(function (a, b) {
      var x = a[key];
      var y = b[key];
      return y - x;
    });
  }

  useEffect(() => {
    const firstFilter = time === "today" ? "today" : "latest_data";
    const filtered = countries?.map((el) => {
      return { ...el[firstFilter], name: el.name };
    });
    const sorted = sortByKey(filtered, data);

    setMostCountries(sorted.slice(0, 5));
  }, [countries]);

  return (
    <div className="most">
      <div className="mostCard">
        <h3>
          Most {data} - {time}
        </h3>

        <ol>
          {mostCountries.map((el) => (
            <li className="click"
              onClick={() => {
                navigate("../country/" + el.name);
              }}
            >
              {el.name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Most;
