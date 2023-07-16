import { useContext, useState, useEffect } from "react";
import { TourDataContext } from "../Context/TourDataContext";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export const CountryDetails = () => {
  const { tourData } = useContext(TourDataContext);
  return (
    <div>
      <h1>Display CountryDetails</h1>
      {tourData.continents.map((continent) => {
        return <div></div>;
      })}
    </div>
  );
};
