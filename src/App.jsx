import React from 'react'
import './App.css'
import ToDoList from './ToDoList'
import AddToDoForm from './AddToDoForm'

function App() {
  return (
    <div>
      <h1> Todo List </h1>
      <AddToDoForm />
      <ul> <ToDoList /> </ul>
    </div>
  )
}

export default App
