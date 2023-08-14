import { createContext, useState } from "react";

export const Appcontext = createContext({});

export const AppProvider = ({ children }) => {
  const [Creategrp, setupdateCLick3] = useState(false);
  const [formappear, setupdateCLick] = useState(false);
  const [signupappear, setupdateCLick2] = useState(false);
  const [appear, setappear] = useState(true);
  const [account, setaccoutname] = useState(false);
  return (
    <Appcontext.Provider
      value={{
        Creategrp,
        formappear,
        signupappear,
        setupdateCLick3,
        setupdateCLick,
        setupdateCLick2,
        appear, 
        setappear,
        account,
        setaccoutname,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};
