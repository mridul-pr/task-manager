import React, { useState } from 'react';
import './TaskManager.css';

function TaskManager() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To-Do');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      alert('Enter a Task Title')
      return;
    }
    const newTask = { title, description, status };
    setTasks([...tasks, newTask]);
    setTitle('');
    setDescription('');
    setStatus('To-Do');
  };

  const handleClear = () => {
    setTasks([]);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'All') {
      return true;
    }
    return task.status === filter;
  });

  return (
    <div className="task-manager">
      <h1>Task Manager System</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          value={title}
          placeholder="Title"
          onChange={handleTitle}
        />
        <input
          value={description}
          placeholder="Description"
          onChange={handleDescription}
        />
        <select
          value={status}
          onChange={handleStatus}
        >
          <option value="To-Do">TO-DO</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
      <button onClick={handleClear} className="clear">Clear</button>
      <div className="filter">
        <label>Filter Tasks: </label>
        <select value={filter} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="To-Do">TO-DO</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskManager;
