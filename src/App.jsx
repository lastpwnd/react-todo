import React from 'react'
import './App.css'
import toDoList from './toDoList'
import AddToDoForm from './AddToDoForm'

function App() {
  return (
    <div>
      <h1> Todo List </h1>
      <AddToDoForm />
      <ul>
        {toDoList()}
      </ul>
    </div>
  )
}

export default App
