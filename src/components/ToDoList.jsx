import React from 'react'
import Todo from './ToDo.jsx'

export const TodoList = ({ props }) => {
  const { todos } = props
  return (
    <div className='todo'>
      <input type='text' placeholder='Add todo' />
      <ul className='todo__list'>
        {todos.map(t => (
          <li key={t.id} className='todo__item'>
            <Todo todo={t} />
          </li>
        ))}
      </ul>
    </div>
  )
}
