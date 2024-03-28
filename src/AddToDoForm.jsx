import React from 'react'
import { useState } from 'react'

const AddToDoForm = (props) => {

  const [toDoTitle, setToDoTitle] = useState("")

function handleTitleChange(event) {
    const newToDoTitle = event.target.value
    setToDoTitle(newToDoTitle)
  }
  

function handleAddTodo(event) 
  {
    event.preventDefault()
    // const toDoTitle = event.target.title.value
    // console.log(toDoTitle)
    //props.onAddToDo(toDoTitle)
    props.onAddToDo({id: Date.now(), title: toDoTitle})
    //document.getElementById("toDoForm").reset()
    setToDoTitle("")
  }
  

  return (
   <div>
        <form id="toDoForm" onSubmit={handleAddTodo}> 
            <label htmlFor='toDoTitle'> Title </label> 
            <input id='toDoTitle' name='title' value={toDoTitle} onChange={handleTitleChange}/>  
            <button type='submit'> Add </button>
        </form>
   </div>
  )     
}




export default AddToDoForm