import { useContext, useEffect, useState } from "react";
import { TourDataContext } from "../Context/TourDataContext";

import { NavLink, useParams } from "react-router-dom";

export const Country = () => {
  const { tourData } = useContext(TourDataContext);
  const [data, setData] = useState();

  const { continentId } = useParams();

  const showData = () => {
    if (continentId) {
      const continent = tourData.continents.find(
        (continent) => continent.id === Number(continentId)
      );
      if (continent) {
        setData(continent);
      }
    }
  };
  console.log(data);

  useEffect(() => {
    showData();
  }, []);

  return (
    <div>
      <h1>Here is the List of All Countries</h1>
    </div>
  );
};
