import './App.css'
import { useState } from 'react'
import ToDoList from './ToDoList'
import AddToDoForm from './AddToDoForm'

function App() {

  const [newToDo, setNewToDo] = useState("123")


  return (
    <div>
      <h1> Todo List </h1>
      <AddToDoForm addToDoForm={setNewToDo} />
      <p> {newToDo} </p>
      <ul> <ToDoList /> </ul>
    </div>
  )
}

export default App