import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export const InputWithLabel = (props) => {
    const inputRef = useRef()

    useEffect( () => {
       inputRef.current.focus() 
    })

  return (
    <>
        <label htmlFor='toDoTitle'> {props.children} </label> 
        <input ref={inputRef} id='toDoTitle' name='title' value={props.toDoTitle} onChange={props.handleTitleChange}/>  
    </>
  )
}

InputWithLabel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  toDoTitle: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  handleTitleChange: PropTypes.func
}

export default InputWithLabel