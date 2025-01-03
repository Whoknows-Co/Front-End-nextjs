import React, { createContext, useState } from "react";
const loginContext = createContext();
function LoginContextProvider({ children }) {
  const [login, setLogin] = useState(false);

  return (
    <loginContext.Provider value={{ login, setLogin }}>
      {children}
    </loginContext.Provider>
  );
}

export default LoginContextProvider;
export { loginContext };
