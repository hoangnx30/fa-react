import React from "react";
import { useState } from "react";

const initialValue = {
  isAuth: false,
  handleChangeIsAuth: () => {},
};

export const AuthContext = React.createContext(initialValue);

interface Props {
  children: React.ReactNode;
}

function AuthContextProvider(props: Props) {
  const [isAuth, setIsAuth] = useState(false);

  const handleChangeIsAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleChangeIsAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
