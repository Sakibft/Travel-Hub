import { useContext } from "react";
import { UserContext } from "../ContextComponent/AuthContextComponent";
import { Navigate } from "react-router-dom";

const PrivateAddToSpot = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  if (loading) {
    return (
      <div>
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateAddToSpot;
