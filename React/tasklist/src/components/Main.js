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

  handleSubmit = (e) => {
    e.preventDefault();
    let { newTask, tasks } = this.state;

    newTask = newTask.trim().toLowerCase();

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

  render() {
    const { newTask, tasks } = this.state

    return (
      <div className="main">
        <h1>Tasklist</h1>

        <form onSubmit={this.handleSubmit} className='form' action="#">
          <input onChange={this.handleInputChange} type="text" value={newTask} />

          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className='tasks'>
          { tasks.map(task => (
            <li key={task}>
              {task}
              <span>
                <FaEdit className='edit' />
                <FaWindowClose className='delete' />
              </span>
            </li>
          )) }
        </ul>
      </div>
    )
  }
}
