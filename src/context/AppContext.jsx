import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [bag, setBag] = useState([]);

  const addToBag = (product) => {
    setBag([...bag, product]);
  };

  return (
    <AppContext.Provider value={{ bag, addToBag }}>
      {children}
    </AppContext.Provider>
  );
};
