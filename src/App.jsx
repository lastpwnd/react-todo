import './App.css'

const toDoList = [
  { id: 1, title: "Check learning objectives" }, 
  { id: 2, title: "Watch the lesson materials" }, 
  { id: 3, title: "Complete the assignment" }, 
  { id: 4, title: "Submit results" }]

function App() {
  return (
    <div>
      <h1> Todo List </h1>
      <ul>
        {
          toDoList.map(e => {
            return (
              <li key = {e.id}> {e.title} </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
