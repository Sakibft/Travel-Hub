import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";

const gprovider = new GoogleAuthProvider();
const githubprovider = new GithubAuthProvider();
export const UserContext = createContext(null);
const AuthContextComponent = ({children}) => {
 const [user,setUser]=useState(null)
 console.log(user);
 const [loading,setLoading]=useState(true)
//  Register
 const createUser = (email,password) => {
  setLoading(true)
  return createUserWithEmailAndPassword(auth, email, password)
 } 
//  Login
const loginUser = (email,password) => {
  return signInWithEmailAndPassword(auth, email, password)

}
// login with google
const googleLogin = () => {
return signInWithPopup(auth,gprovider)
}
// git hub login
const gitHubLogin = () => {
  return signInWithPopup(auth, githubprovider)

}
// logout 
const logOut = () => {
  return signOut(auth)
 }

useEffect(()=>{
  const unSubsCribe = onAuthStateChanged(auth,currentUser => {
    if(currentUser){
      setUser(currentUser)
      setLoading(false);
    }
    else{
      setUser(null)
      setLoading(false)
    }
   });
   return ()  => {
    unSubsCribe();
   }
  
    },[]);
   

  const info = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    gitHubLogin,
    logOut
  }
  return (
    <UserContext.Provider value={info}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContextComponent;