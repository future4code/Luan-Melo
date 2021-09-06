import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [accessAllowed, setAccessAllowed] = useState(false);
  const { push } = useHistory();
  const hasUserAndToken = localStorage.getItem("token");

  const verifyUserCredential = useCallback(async () => {
    if (hasUserAndToken) {
      setAccessAllowed(true);
    } else {
      setAccessAllowed(false);
      push("/login");
    }
  }, [hasUserAndToken, push]);

  useEffect(() => {
    verifyUserCredential();
  }, [verifyUserCredential]);

  return <>{accessAllowed ? children : <>Carregando...</>}</>;
};

export default PrivateRoute;
