//React
import React from 'react'
import ReactDOM from 'react-dom/client'

//pages
import Root from './root.jsx'
import Login from './pages/login.jsx'

//css
import './index.css'

//libraries
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";

//router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index element={<Root />}/>
    <Route path="/login" element={<Login />} />
    </>

  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router}/>
    </CookiesProvider>
  </React.StrictMode>,
)
