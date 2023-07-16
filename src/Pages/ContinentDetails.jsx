import { useContext } from "react";
import { TourDataContext } from "../Context/TourDataContext";

import { NavLink } from "react-router-dom";
import { Country } from "./Country";

export const ContinentsDetails = () => {
  const { tourData } = useContext(TourDataContext);
  return (
    <div>
      <h1>Welcome To Trip Advisor</h1>
      <h3>Top Continents for next Holidies</h3>
      {tourData.continents.map((continent) => {
        return (
          <NavLink to={`/Country/${continent.id}`} key={continent.id}>
            {" "}
            <div style={{ display: "inline-block" }}>
              <div
                style={{
                  width: "200px",
                  height: "200px",
                  border: "1px solid red",
                  margin: "10px",
                  cursor: "pointer"
                }}
              >
                <img
                  alt="img"
                  style={{ width: "200px", height: "200px" }}
                  src={continent.image}
                />
                <span style={{ fontWeight: "bolder" }}>{continent.name}</span>
              </div>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
};
