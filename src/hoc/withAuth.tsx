import React, { ComponentType, useEffect } from "react";
import { Redirect } from "react-router-dom";

function withAuth<T>(ChildComponent: ComponentType<T>): React.FC<T> {
  const EnhancedComponent: React.FC<T> = (props) => {
    const [isAuth, setIsAuth] = React.useState<null | boolean>(null);
    useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    }, []);

    if (isAuth === null) {
      return <p>Loading.....</p>;
    }

    if (isAuth === false) {
      return <Redirect to="/login" />;
    }

    return <ChildComponent {...props} />;
  };

  return EnhancedComponent;
}

export { withAuth };
