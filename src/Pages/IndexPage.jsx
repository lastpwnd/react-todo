import React from 'react'
import '../App.css'
import ToDoList from "../components/ToDoList"
import AddToDoForm from "../components/AddToDoForm"
import { useState, useEffect } from 'react'

const IndexPage = () => {
 
  // initial loading data from localStorage
  let storageData = JSON.parse(localStorage.getItem("savedToDoList"))
  if (!storageData) {
    storageData = [] // to avoid sending null to the state 
  }

const [toDoList, setToDoList] = useState([])
const [isLoading, setIsLoading] = useState(true)

const URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`

async function readData() {
 
  const options = {
    method: "GET",
    headers: { Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`}
  }
  try {
    const response = await fetch(URL, options)

    if (!response.ok) {
      const message = `Error: ${response.status}`
      throw new Error(message)
    }

    const receivedData = await response.json()

    const todos = receivedData.records.map((e) => {
      const newToDo = {
        id: e.id,
        title: e.fields.title
      }
      return newToDo
    })
   
    setToDoList(todos)
    setIsLoading(false)

    //return receivedData.records

  } catch (error) {
    console.log(error.status, error.message)
  }

}


async function writeData(input) {

      const airtableData = {fields:{title:`${input.title}`}}
      const options = {
        method: "POST",
        headers: {
          "Content-Type": 'application/json',
          Authorization:`Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
        },
        body:JSON.stringify(airtableData)       
      }

    try {
  const dataSent = await fetch(URL, options)

  if (!dataSent.ok) {
    const message = `Error: ${dataSent.status}`
    throw new Error(message)
  }
  const response = await dataSent.json()
  // return response
    }
    catch(error) {
      console.log(error.status, error.message)
    }
}

useEffect( () => {
  //async immitation with delay

  // const promise1 = new Promise ((resolve, reject) => {
  //   setTimeout( () => {
  //     resolve({data:{toDoList: storageData}
  //     })
  //   }, 2000)
  // }).then((result) => {
  //   setToDoList(result.data.toDoList)
  //   setIsLoading(false)
  // })

 readData()
 //.then(records => console.log(records))
 
}, [])

//push data into LS
useEffect(() => {
  if (!isLoading) {
    localStorage.setItem("savedToDoList", JSON.stringify(toDoList))
  } 
}, [toDoList])


// add func
function addToDo(newToDo) {
  writeData(newToDo)
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

export default IndexPage