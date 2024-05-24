import React from 'react'
import '../App.css'
import { Link } from "react-router-dom"

const NewToDoList = () => {
    return (
        <>
            <h1>New To Do List <br/>
            <Link to="/"> Main Page </Link></h1>
        </>
    )
}

export default NewToDoList