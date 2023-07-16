import { createContext, useState } from "react";
import { data } from "../Pages/TourDataBase";

export const TourDataContext = createContext();

export const TourDataContextProvider = ({ children }) => {
  const [tourData, setTourData] = useState(data);

  return (
    <TourDataContext.Provider value={{ tourData }}>
      {children}
    </TourDataContext.Provider>
  );
};
