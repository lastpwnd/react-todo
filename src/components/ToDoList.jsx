import ToDoListItem from './ToDoListItem'
import PropTypes from 'prop-types'
 

const ToDoList = (props) => {
  
 

  return props.toDoList.map(e => {
    return(
      <ToDoListItem onRemoveToDo={props.onRemoveToDo} id={e.id} key={e.id} innerText={e.title}/>
    )
  })
}


ToDoListItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  innerText: PropTypes.string,
  createdA: PropTypes.string,
  onRemoveToDo: PropTypes.func
}


export default ToDoList