import ToDoListItem from './ToDoListItem'

export const toDoListArray = [
    { id: 1, title: "Check learning objectives" }, 
    { id: 2, title: "Watch the lesson materials" }, 
    { id: 3, title: "Complete the assignment" }, 
    { id: 4, title: "Submit results" }]
  

const ToDoList = (props) => {
  return props.toDoList.map(e => {
    return(
      <ToDoListItem key={e.id} innerText={e.title} />
    )
  })
  
  // toDoListArray.map(e => {
  //   return (            
  //     <ToDoListItem key={e.id} innerText={e.title} />
  //   )
  // })s
}

export default ToDoList