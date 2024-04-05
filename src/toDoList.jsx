import ToDoListItem from './ToDoListItem'

export const toDoListArray = [
    { id: 1, title: "Check learning objectives" }, 
    { id: 2, title: "Watch the lesson materials" }, 
    { id: 3, title: "Complete the assignment" }, 
    { id: 4, title: "Submit results" }]
  

const ToDoList = (props) => {
  return props.toDoList.map(e => {
    return(
      <ToDoListItem onRemoveToDo={props.onRemoveToDo} id={e.id} key={e.id} innerText={e.title} />
    )
  })
}

export default ToDoList