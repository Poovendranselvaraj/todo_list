import React, { useState } from 'react'
import Create from './Create'

function Home() {
    const [todos, setTodos] = useState([])
  return (
    <div className='Home'>
      <h2>Todo List</h2>
      <Create />  
      {
        todos.length === 0 
        ?
        <diiv><h2>No Record</h2></diiv>
        :
        todos.map(todo => (
            <div>{todo}</div>
        ))
      }
    </div>
  )
}

export default Home
