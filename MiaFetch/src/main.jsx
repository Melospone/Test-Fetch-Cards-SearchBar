import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from "./assets/components/About.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';





const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/about",
    element: <About></About>
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
