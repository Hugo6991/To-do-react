import { editableInputTypes } from '@testing-library/user-event/dist/utils'
import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);
    
    const hanldeSubmit = (e) => {
      
      //prevent default action
      e.preventDefault()
      // edit todo
      editTodo(value, task.id)  
    }
  
  return (
    
    <form className='TodoForm' onSubmit={hanldeSubmit}>
      <input type='text' className='todo-input' value={value} onChange={(e) => setValue(e.target.value)} placeholder='Update Task' />
      <button className='todo-btn'>
        Update task
      </button>
    </form>
  )
}
