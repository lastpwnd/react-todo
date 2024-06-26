import PropTypes from 'prop-types'

const ToDoListItem = (props) => {
  return (
    <li> 
        {props.innerText}
        <button className="remove-button" onClick={() => { props.onRemoveToDo(props.id) }}> X </button>
    </li>
  )
}

ToDoListItem.propTypes = {
  innerText: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  onRemoveToDo: PropTypes.func
}

export default ToDoListItem