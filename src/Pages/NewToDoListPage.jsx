import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"
import localStyle from "./pages.module.css"

const NewToDoListPage = () => {
    return (
        <div className={localStyle.newToDoListPageHeader}>
            New To Do List <br />
            <Link to="/"> return to main page </Link>
        </div>
    )
}

export default NewToDoListPage