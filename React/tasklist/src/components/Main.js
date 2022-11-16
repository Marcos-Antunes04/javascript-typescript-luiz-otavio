import React, { Component } from 'react';
import './Main.css'

// Form
import { FaPlus } from 'react-icons/fa'

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa'

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: []
  }

  validateTask() {
    const inputValue = document.querySelector('.taskname').value;
    if(inputValue.trim() === '') {
      return false
    }

    return inputValue;
  }

  handleSubmit = (e) => {
    if(!this.validateTask()) return;

    e.preventDefault();
    let { newTask, tasks } = this.state;

    newTask = newTask.trim();

    if(tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    this.setState({
      tasks: [...newTasks, newTask]
    })
  }

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleEdit = (e, index) => {
    console.log('Edit', index)
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);

    this.setState({
      tasks:  newTasks,
    })
  }

  render() {
    const { newTask, tasks } = this.state

    return (
      <div className="main">
        <h1>Tasklist</h1>

        <form onSubmit={this.handleSubmit} className='form' action="#">
          <input onChange={this.handleInputChange} type="text" value={newTask} className="taskname" />

          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className='tasks'>
          { tasks.map((task, index) => (
            <li key={index}>
              {task}
              <span>
                <FaEdit onClick={(e) => this.handleEdit(e, index)} className='edit' />
                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className='delete' />
              </span>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}
