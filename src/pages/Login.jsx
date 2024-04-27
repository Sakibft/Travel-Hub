import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../ContextComponent/AuthContextComponent";
import toast, { Toaster } from "react-hot-toast";

 

const Login = () => { 
  const {loginUser,googleLogin, gitHubLogin }=useContext(UserContext);
 const [error,setError]=useState('');
 const [success,setSuccess]=useState('');
 const [google,setGSuccess]=useState();
 const [gError,setGError]=useState();
 const [gitSuccess, setGitSuccess] = useState();
 const [gitError,setGitError]=useState()
 if(success){
    toast.success('Login successfully!')
 }
 if(error){
    toast.error(error)  
 }
  const handleLogin = e => {
    setError('')
    setSuccess('')
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email,password)
    .then((result) => {
      setSuccess(result)
      console.log(result.user);
    })
    .catch((error) => {
      setError(error.message)
      console.error(error)
    })
    console.log(email,password);
  }

//   google
if(google){
    toast.success('Login successfully with google!')
}
if(gError){
    toast.error(gError)
}
  const handleGoogle = () => {
    
    googleLogin()
    .then((result)=> {
        setGSuccess(result)
        console.log(result.user);
    })
    .catch((error)=> {
        setGError(error.message)
        console.log(error.message);
    })
    console.log('clicked google');
  }
//   git hub
if(gitSuccess){
    toast.success('Login successfully with Github!')
}
if(gitError){
    toast.error(gitError)
}
const handleGithub = () => {
    gitHubLogin()
    .then((result)=> {
        setGitSuccess(result)
        console.log(result.user);
    })
    .catch((error)=> {
        setGitError(error.message)
        console.error(error)
    })
    console.log('clicked github ');
}
  return (
    <div>
      <div><Toaster/></div>
       <div className="w-full max-w-md p-8 space-y-3 rounded-xl border bg-white   font-sans mx-auto">
        <h1 className="text-3xl font-bold text-center text-indigo-600">Login</h1>
        {/* Input fields and the form started */}
        <form   onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 text-sm">
                <label htmlFor="username" className="block ">
                    Email
                </label>
                <input type="email" name="email" placeholder="email" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
            </div>
            <div className="space-y-2 text-sm">
                <label htmlFor="password" className="block ">
                    Password
                </label>
                <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring  " />
            </div>
            {/* Sign in Button */}
            <button  className="text-lg rounded-xl relative p-[10px] block w-full bg-indigo-600 text-white border-y-4 duration-500 overflow-hidden focus:border-indigo-500 z-50 group">
                Log In
                <span className="absolute opacity-0 group-hover:opacity-100 duration-100 group-hover:duration-1000 ease-out flex justify-center inset-0 items-center z-10 text-white">
                    Let&apos;s go
                </span>
                <span className="bg-indigo-800 absolute inset-0 -translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-y-full group-hover:translate-y-0 group-hover:duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
                <span className="bg-indigo-800 absolute inset-0 -translate-x-full group-hover:translate-x-0 group-hover:delay-300 delay-100 duration-1000"></span>
            </button>
        </form>
        <div className="flex items-center pt-4 space-x-2">
            <div className="flex-1 h-px bg-gray-300"></div>
            <p className="text-sm text-gray-600">Login with social accounts</p>
            <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        {/* Social icons */}
        <div className="flex justify-center space-x-4">
            <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-full hover:bg-gray-200">
               google
            </button>
            <button aria-label="Log in with Twitter" className="p-3 rounded-full hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-current"><path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path></svg>
            </button>
            <button onClick={handleGithub} aria-label="Log in with GitHub" className="p-3 rounded-full hover:bg-gray-200">
               GitHub
            </button>
        </div>
        <p className="text-sm text-center gap-2 flex justify-center sm:px-6 ">
            Don&apos;t have an account?
            <Link to='/register' className="underline hover:text-indigo-600">
                Sign up
            </Link>
        </p>
    </div>
    </div>
  );
};

export default Login;