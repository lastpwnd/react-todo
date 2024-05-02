import React from 'react'
import { useState } from 'react'
import InputWithLabel from './InputWithLabel'

const AddToDoForm = (props) => {

  const [toDoTitle, setToDoTitle] = useState("")

function handleTitleChange(event) {
    const newToDoTitle = event.target.value
    setToDoTitle(newToDoTitle)
  }
  
function handleAddTodo(event) 
  {
    event.preventDefault()
    props.onAddToDo({id: Date.now(), title: toDoTitle})
    setToDoTitle("")
  }
  
  return (
   <div>
        <form id="toDoForm" onSubmit={handleAddTodo}> 
            <InputWithLabel toDoTitle = {toDoTitle} handleTitleChange={handleTitleChange}> 
             Title
            </InputWithLabel> 
            <button type='submit'> Add </button>
        </form>
   </div>
  )     
}

export default AddToDoForm