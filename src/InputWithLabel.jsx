import React, { useEffect, useRef } from 'react'

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

export default InputWithLabel