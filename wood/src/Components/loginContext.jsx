// import { createContext, useState } from "react";

// export const LoginContext = createContext(null);

// export const LoginContextProvider = ({ children }) => {
//   const [user, setUser] = useState();

//   return (
//     <LoginContext.Provider value={{ user, setUser }}>
//       {children}
//     </LoginContext.Provider>
//   );
// };

import { createContext, useState } from "react";

// Set a default context value that matches the expected structure
export const LoginContext = createContext({
  user: null,
  setUser: () => {},
});

export const LoginContextProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <LoginContext.Provider value={{ user, setUser }}>
      {children}
    </LoginContext.Provider>
  );
};
