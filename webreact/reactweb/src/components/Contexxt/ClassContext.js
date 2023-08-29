import { createContext, useState } from "react";
export const ClassContext = createContext();
export const ClassProvider = ({ children }) => {
  const [idexseleac, setindex] = useState();
  const [wordclass, setwwordClass] = useState();
  const [changeClass, setchangeClass] = useState([]);
  const [alertactive, setalertactive] = useState(false);
  const [wordalert, setwordalert] = useState("");
  const [adsapper, setadsapper] = useState(false);
  return (
    <ClassContext.Provider
      value={{
        idexseleac,
        setindex,
        wordclass,
        setwwordClass,
        changeClass,
        setchangeClass,
        alertactive,
        setalertactive,
        wordalert,
        setwordalert,
        adsapper,
        setadsapper,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};
