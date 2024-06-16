import React from 'react'
import { Link } from "react-router-dom"
import "../App.css"
import localStyle from "./pages.module.css"

export const ErrorPage = () => {
  return (
      <div className={localStyle.errorPageHeader}>
        Oops... Something went wrong, please return to <Link to="/"> main page </Link>
      </div> 
  )
}

export default ErrorPage