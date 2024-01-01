import React, { createContext, useContext, useState } from "react";

export const MyExamContext = createContext();

export const MyExamInformationProvider = ({ children }) => {
  const [state, setState] = useState("");
  return (
    <MyExamContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </MyExamContext.Provider>
  );
};

export const useExamContext = () => {
  const context = useContext(MyExamContext);
  console.log(context);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
