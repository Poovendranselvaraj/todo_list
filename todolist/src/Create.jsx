import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState([])
    const handleAdd = () => {
        axios.post('https://todo-list-vojs.onrender.com/add', {task: task})
        .then(result => {
          location.reload()
        })
        
        .catch(err => console.log(err))
    } 
  return (
    <div className='Create_form'>
      <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)}/>
      <button type='button'onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
