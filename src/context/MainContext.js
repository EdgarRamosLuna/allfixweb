import React, { useState, useEffect, createContext } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [service, setService] = useState(0);
  const [show, setShow] = useState(false);
  const showService = (e, id) => {
    setService(id);
    setShow(true);
    
  };
  const hideService = (e, id) => {
    setService(0);
    setShow(false);
    
  };
  return (
    <MainContext.Provider value={{
        service, setService,
        showService, setShow,
        show,hideService
    }}>
      {children}
    </MainContext.Provider>
  );
};
