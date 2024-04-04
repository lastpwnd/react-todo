import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import ToDoList from './ToDoList'
import AddToDoForm from './AddToDoForm'

function useSemiPersistentState() {

  let storageData = JSON.parse(localStorage.getItem("savedToDoList"))
  if (!storageData) { 
    storageData = [] // to avoid sending null to the state 
  }

  const [toDoList, setToDoList] = useState(storageData)

  useEffect( () => { 
    localStorage.setItem("savedToDoList",JSON.stringify(toDoList))
  },[toDoList])

  return [toDoList, setToDoList]
 }

function App() {

  const [toDoList, setToDoList] = useSemiPersistentState()
  
  function addToDo(newToDo) {
    setToDoList([...toDoList, newToDo])
  }

  
  return (
    <>
      <h1> Todo List </h1>
      <AddToDoForm onAddToDo={addToDo}/>
      <ul> <ToDoList toDoList={toDoList} /> </ul>
    </>
  )
}

export default App