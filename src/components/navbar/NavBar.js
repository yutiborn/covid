import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import Select from "../select/Select";

const NavBar = ({ countries }) => {
  function clickFunc(name) {
    navigate("../" + name);
    setValue(name);
    setIsClick(false);
  }

  const navigate = useNavigate();
  const [mapArr, setMapArr] = useState("");

  const [isClick, setIsClick] = useState(false);
  const [value, setValue] = useState("");

  let array = mapArr === "" ? countries : mapArr;

  useEffect(() => {
    const newCountries = countries.filter((el) =>
      el.name.toLowerCase().includes(value.toLowerCase())
    );
    setMapArr(newCountries);
  }, [value]);

  const listStyle = {
    display: "flex",
    justifyContent: "space-around",
    broder: "black solid 1px",
    listStyle: "none",
    textDecoration: "none",
    color: "pink",
  };

  return (
    <div>
      <ul style={listStyle}>
        <li>
          <Link to="/">
            <h3>Home</h3>{" "}
          </Link>
        </li>
        <li>
          <Link to="/about">
            <h3>About</h3>{" "}
          </Link>
        </li>
        <div
          onFocus={() => {
            setIsClick(true);
          }}
        >
          <input 
            type="text"
            placeholder="Country"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          ></input>
          {isClick && (
            <div className="box">
              {mapArr.map((country, i) => (
                <Select
                  country={country}
                  key={country.code}
                  setIsClick={setIsClick}
                  setValue={setValue}
                />
              ))}
            </div>
          )}
        </div>
      </ul>
      <div className="logo"> corona virus tracker</div>
    </div>
  );
};

export default NavBar;
