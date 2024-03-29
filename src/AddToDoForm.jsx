import React from 'react'

const AddToDoForm = (props) => {

function handleAddTodo(event) 
  {
    event.preventDefault()
    const toDoTitle = event.target.title.value
    console.log(toDoTitle)
    props.addToDoForm(toDoTitle)
    document.getElementById("toDoForm").reset()
  }
  

  return (
   <div>
        <form id="toDoForm" onSubmit={handleAddTodo}> 
            <label htmlFor='toDoTitle'> Title </label> 
            <input id='toDoTitle' name='title' />  
            <button type='submit'> Add </button>
        </form>
   </div>
  )     
}

export default AddToDoForm