import React from 'react'
import { Link } from "react-router-dom"
import "../App.css"

export const ErrorPage = () => {
  return (
    <h1>Oops... Something went wrong, please return to <Link to="/"> Main Page </Link></h1>
  )
}

export default ErrorPage