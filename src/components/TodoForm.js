import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addTodo(value);

    setValue("");
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input type='text' className='todo-input' onChange={(e) => setValue(e.target.value)} value={value} placeholder='what is the task today?'/>
      <button className='todo-btn' type='submit'>Add Task</button>
    </form>
  )
}
