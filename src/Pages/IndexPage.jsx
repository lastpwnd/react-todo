import React from 'react'
import '../App.css'
import ToDoList from "../components/ToDoList"
import AddToDoForm from "../components/AddToDoForm"
import { useState, useEffect, useReducer } from 'react'



const IndexPage = () => {
 
  // initial loading data from localStorage
  let storageData = JSON.parse(localStorage.getItem("savedToDoList"))
  if (!storageData) {
    storageData = [] // to avoid sending null to the state 
  }
  
  const initialSortState = { method:"titleSort", value: 0 }

  let storageData2 = JSON.parse(localStorage.getItem("sortingState"))
  if (!storageData2) {
    storageData2 = initialSortState // to avoid sending null to the state 
  }

function reducer(state, action) {
    switch (action.type) {
      case 'titleSort':
        {
          
          if (sortList == 1) {
            setSortList(-1)
            return {
              method: "titleSort",
              value: -1
            }
          }
          else {
            setSortList(1)
            return {
              method: "titleSort",
              value: 1
            }
          }

        }
      case 'dateSort':
        {
          
          if (dateSortList == 1) {
            setDateSortList(-1)
            return {
              method: "dateSort",
              value: -1
            }
          }
          else {
            setDateSortList(1)
            return {
              method: "dateSort",
              value: 1
            }
          }
        }
    }
  }
  


const [toDoList, setToDoList] = useState([])
const [isLoading, setIsLoading] = useState(true)
//sorting methods states
const [sortList, setSortList] = useState(0) 
const [dateSortList, setDateSortList] = useState(1)
const [state, dispatch] = useReducer(reducer, storageData2) 
//sorting button names states
const [sortButtonName, setSortButtonName] = useState("Sort by Title") //
const [dateSortButtonName, setDateSortButtonName] = useState("Older First")

// const URL = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`
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
        title: e.fields.title,
        createdAt: e.fields.createdAt
      }
      return newToDo
    })

    const sortedData = todos.sort((a,b) => {
    
      let dataA, dataB

      if (state.method == "titleSort" && state.value == -1) {
        dataA = a.title.toUpperCase()
        dataB = b.title.toUpperCase()
        setSortButtonName("Ascending")
        setDateSortButtonName("Sort by Date")
      }
      if (state.method == "titleSort" && state.value == 1)
        {
          dataA = b.title.toUpperCase()
          dataB = a.title.toUpperCase()
          setSortButtonName("Descending")
          setDateSortButtonName("Sort by Date")
        } 
      if (state.method == "dateSort" && state.value == 1) {
        dataA = a.createdAt
        dataB = b.createdAt
        setDateSortButtonName("Older First")
        setSortButtonName("Sort by Title")
      }
      if (state.method == "dateSort" && state.value == -1)
        {
          dataA = b.createdAt
          dataB = a.createdAt
          setDateSortButtonName("Newer First")
          setSortButtonName("Sort by Title")
        }
        
        if (dataA > dataB)  return 1
        else if (dataA < dataB) return -1
        else return 0 
      }) 

    setToDoList(sortedData)
    setIsLoading(false)

    //return receivedData.records

  } catch (error) {
    console.log(error.status, error.message)
  }
}


async function writeData(input) {

      const airtableData = {fields:{title:`${input.title}`, createdAt:`${input.createdAt}`}}
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
    readData() 
}, [sortList, dateSortList])

//push data into LS
useEffect(() => {
  if (!isLoading) {
    localStorage.setItem("savedToDoList", JSON.stringify(toDoList))
  } 
    localStorage.setItem("sortingState",  JSON.stringify(state))
}, [toDoList, state])


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
            <br/>
            <button onClick={() => {dispatch({type: "titleSort"})}}> {sortButtonName}</button>
            <button onClick={() => {dispatch({type: "dateSort"})}}> {dateSortButtonName}</button>
        </>
    )
}

export default IndexPage