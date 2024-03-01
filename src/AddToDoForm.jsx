import React from 'react'

const AddToDoForm = () => {
  return (
   <div>
        <form id="toDoForm"> 
            <label htmlFor='toDoTitle'> Title </label> 
            <input id='toDoTitle' />  
            <button type='submit'> Add </button>
        </form>
   </div>
  )     
}

export default AddToDoForm