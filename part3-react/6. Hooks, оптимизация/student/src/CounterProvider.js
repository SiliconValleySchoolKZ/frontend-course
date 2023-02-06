import React, { createContext, useState } from "react";

export const CountContext = createContext(null);

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
};

export default CounterProvider;
