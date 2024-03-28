import './App.css'
import { useState } from 'react'
import ToDoList, {toDoListArray} from './ToDoList'
import AddToDoForm from './AddToDoForm'

function App() {

  const [toDoList, setToDoList] = useState([])
 
  function addToDo(newToDo) {
    setToDoList([...toDoList, newToDo])
  }

  return (
    <div>
      <h1> Todo List </h1>
      <AddToDoForm onAddToDo={addToDo}/>
      <ul> <ToDoList toDoList={toDoList} /> </ul>
    </div>
  )
}

export default App