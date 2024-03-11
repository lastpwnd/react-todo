import React from 'react'

const AddToDoForm = (props) => {

function handleAddTodo(event) 
  {
    event.preventDefault()
    // Instructions are unclear: either preventDefault() and fixating the inner value or clearing the input and console after default Submit event
    const toDoTitle = event.target.title.value
    console.log(toDoTitle)
    props.addToDoForm(toDoTitle)
    // alert(`You have entered -> ${toDoTitle} \n Value is logged in console \n Now the form will be cleared` )
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