import React, { useState } from 'react'
import './TaskManager.css'

function TaskManager() {
const[title,setTitle] = useState()
const[description,setDescription] = useState()
const[status,setStatus] = useState('To-Do')
const[tasks,setTasks] = useState([])

const handleTitle = (e) =>{
  setTitle(e.target.value)
}
const handleDescription = (e) =>{
  setDescription(e.target.value)
}
const handleStatus = (e) =>{
  setStatus(e.target.value)
}

const handleSumbit = (e)=>{
  e.preventDefault()
  const newTask = {title,description,status}
  setTasks([...tasks,newTask])
  setTitle('')
  setDescription('')
  setStatus('To-Do')
}

  return (
   <div>
      <form onSubmit={handleSumbit} className='form'>
        <input
        value={title}
        placeholder='title'
        onChange={handleTitle}
        > 
        </input>
        <input
        value={description}
        placeholder='description'
        onChange={handleDescription}
        ></input>
        <select
        onChange={handleStatus}>
          <option value='To-Do'> TO-DO</option>
          <option value='Completed'> Completed</option>
        </select>
        <button type='sumbit'>Submit</button>
      </form>
      <table className='table'>
        <thead>
          <th> Title</th>
          <th> Description</th>
          <th> Status</th>
        </thead>
        <tbody>
         {tasks.map((tasks,index) =>(
          <tr key={index}>
            <td>{tasks.title}</td>
            <td>{tasks.description}</td>
            <td>{tasks.status}</td>
          </tr>))}
        </tbody>
      </table>
   </div>
  )
}

export default TaskManager