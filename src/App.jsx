import React from 'react'
import './App.css'
import { useState, useEffect } from 'react'
import ToDoList from './ToDoList'
import AddToDoForm from './AddToDoForm'

function App() {

  // initial loading data from localStorage
  let storageData = JSON.parse(localStorage.getItem("savedToDoList"))
    if (!storageData) {
      storageData = [] // to avoid sending null to the state 
    }
  
  const [toDoList, setToDoList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  //async immitation with delay
  useEffect( () => {
    const promise1 = new Promise ((resolve, reject) => {
      setTimeout( () => {
        resolve({data:{toDoList: storageData}
        })
      }, 2000)
    }).then((result) => {
      setToDoList(result.data.toDoList)
      setIsLoading(false)
    })
  }, [])

  //push data into LS
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedToDoList", JSON.stringify(toDoList))
    } 
  }, [toDoList])


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

  return (
    <>
      <h1> Todo List </h1>
      <AddToDoForm onAddToDo={addToDo} />
      <ul>
        {isLoading
          ? <p> Loading... </p>
          : <ToDoList onRemoveToDo={removeToDo} toDoList={toDoList} />
        }
      </ul>
    </>
  )
}

export default App