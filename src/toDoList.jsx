import React from 'react'

const toDoListArray = [
    { id: 1, title: "Check learning objectives" }, 
    { id: 2, title: "Watch the lesson materials" }, 
    { id: 3, title: "Complete the assignment" }, 
    { id: 4, title: "Submit results" }]
  

const ToDoList = () => (
        toDoListArray.map(e => {
            return (
              <li key = {e.id}> {e.title} </li>
            )
          })
  )


export default ToDoList