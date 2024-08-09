import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsCircleFill,BsFillCheckCircleFill,BsFillTrashFill } from "react-icons/bs";

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])


    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/'+id)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
  return (
    <div className='Home'>
      <h1>Todo List</h1>
      <Create />  
      <br />
      {
        todos.length === 0 
        ?
        <div><h2>No Record</h2></div>
        :
        todos.map(todo => (
            <div className='task'>
              <div className='checkbox' onClick={handleEdit(todo._id)}>
                <BsCircleFill className='icon' />
                <p>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon' /></span>
              </div>
            </div>
        ))
      }
    </div>
  ) 
}

export default Home
