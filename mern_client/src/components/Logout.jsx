import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handlelogout = () => {
    logout()
      .then(() => {
        alert("Log out Successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // seterror("errorMessage");
      });
  };
  return (
    <div className="flex items-center justify-center h-screen bg-teal-100 ">
      <button
        className="px-8 py-2 text-white bg-red-700 rounded"
        onClick={handlelogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Logout;
