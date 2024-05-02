const ToDoListItem = (props) => {
  return (
    <li> 
        {props.innerText} 
        <button className="remove-button" onClick={() => { props.onRemoveToDo(props.id) }}> X </button>
    </li>
  )
}

export default ToDoListItem