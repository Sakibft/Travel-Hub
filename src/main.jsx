import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthContextComponent from './ContextComponent/AuthContextComponent.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextComponent>
    <RouterProvider router={router} fallbackElement={ <div className="container mx-auto flex justify-center items-center mt-40  ">
        <span className="loading loading-dots loading-xs text-pink-400"></span>
        <span className="loading loading-dots loading-sm text-pink-400"></span>
        <span className="loading loading-dots loading-md text-pink-400"></span>
        <span className="loading loading-dots loading-lg text-pink-400"></span>
      </div>} />
    </AuthContextComponent>
  </React.StrictMode>,
)
