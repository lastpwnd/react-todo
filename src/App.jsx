import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import ToDoList from './ToDoList'
import AddToDoForm from './AddToDoForm'

function App() {

  // initial loading data from localStorage
  function useSemiPersistentState() {

    let storageData = JSON.parse(localStorage.getItem("savedToDoList"))
    if (!storageData) {
      storageData = [] // to avoid sending null to the state 
    }

    const [toDoList, setToDoList] = useState(storageData)

    useEffect(() => {
      localStorage.setItem("savedToDoList", JSON.stringify(toDoList))
    }, [toDoList])

    return [toDoList, setToDoList]
  }

  // add func
  function addToDo(newToDo) {
    setToDoList([...toDoList, newToDo])
  }

  // remove func
  function removeToDo(id) {
    const filteredList = toDoList.filter((ele) => {
      return ele.id !== id
    })
    setToDoList(filteredList)
  }



  
  const [toDoList, setToDoList] = useSemiPersistentState()

  return (
    <>
      <h1> Todo List </h1>
      <AddToDoForm onAddToDo={addToDo} />
      <ul> <ToDoList onRemoveToDo={removeToDo} toDoList={toDoList} /> </ul>
    </>
  )
}

export default App