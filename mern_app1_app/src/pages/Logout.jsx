import { useEffect } from "react";
import { UseAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";
function Logout() {
  const { deleteToken } = UseAuth();
  useEffect(
    function () {
      deleteToken();
    },
    [deleteToken()]
  );
  return <Navigate to={"/login"}></Navigate>;
}

export default Logout;
