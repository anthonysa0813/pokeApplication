import { createContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

const DarkModeContextProvider = ({ children }) => {
  const [darkModeState, setDarkModeState] = useState(false);

  // useEffect(() => {
  //   if (darkModeState) {
  //     document.body.classList.add("dark-content");
  //     document.body.classList.remove("light-content");
  //   } else {
  //     document.body.classList.add("light-content");
  //     document.body.classList.remove("dark-content");
  //   }
  // }, [darkModeState]);

  return (
    <DarkModeContext.Provider value={{ setDarkModeState, darkModeState }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
