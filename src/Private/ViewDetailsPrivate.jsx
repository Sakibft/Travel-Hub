 
import { useContext } from 'react';
import { UserContext } from '../ContextComponent/AuthContextComponent';
import { Navigate } from 'react-router-dom';

const ViewDetailsPrivate = ({children}) => {
  const {loading,user}= useContext(UserContext)
  if (loading) {
    return (
      <div className="container mx-auto flex justify-center items-center   ">
        <span className="loading loading-dots loading-xs text-pink-400"></span>
        <span className="loading loading-dots loading-sm text-pink-400"></span>
        <span className="loading loading-dots loading-md text-pink-400"></span>
        <span className="loading loading-dots loading-lg text-pink-400"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return  <Navigate to="/login"></Navigate>
};

export default ViewDetailsPrivate;