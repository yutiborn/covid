import React from "react";
import "./Countries.css";
import { useLocation, useParams } from "react-router-dom";

const Countries = ({ numberWithCommas, countries, i }) => {
  const counteyName = useParams().country;

  const country = countries.filter((el) => el.name === counteyName)[0];
  return (
    <div>
      <h3>{counteyName}</h3>
      <table className="countriesTable">
        <tbody>
          <tr>
            <td>
              <h4>ACTIVE:</h4>
              <h5>{numberWithCommas(country?.latest_data.confirmed)}</h5>
            </td>
            <td>
              <h4>TODAY:</h4>
              <h5>{numberWithCommas(country?.today.confirmed)}</h5>
            </td>
          </tr>

          <tr>
            <td>
              <h4>CASES:</h4>
              <h5>{numberWithCommas(country?.confirmed)}</h5>
            </td>
            <td>
              <h4>DEATS:</h4>
              <h5>{numberWithCommas(country?.latest_data.deaths)}</h5>
            </td>
          </tr>

          <tr>
            <td>
              <h4>RECOVERED:</h4>
              <h5>{numberWithCommas(country?.latest_data.recovered)}</h5>
            </td>
            <td>
              <h4>CRITICAL:</h4>
              <h5>{numberWithCommas(country?.latest_data.critical)}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Countries;
