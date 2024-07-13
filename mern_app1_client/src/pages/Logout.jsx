import { useEffect } from "react";
import { UseAuth } from "../auth/auth";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
function Logout() {
  const { deleteToken } = UseAuth();
  useEffect(function () {
    deleteToken();
    toast.success("Logged out successfully");
  }, []);
  return (
    <div>
      <Navigate to={"/login"}></Navigate>;
    </div>
  );
}

export default Logout;
