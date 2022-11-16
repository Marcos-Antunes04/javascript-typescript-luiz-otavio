import React, { Component } from 'react';
import Form from './Form/index';
import Tasks from './Tasks/index';
import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if(!tasks) return;

    this.setState({tasks});
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;

    localStorage.setItem('tasks', JSON.stringify(tasks));
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
    let { newTask, tasks, index } = this.state;

    newTask = newTask.trim();

    if(tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if(index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      })
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
      })
    }

  }

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleEdit = (e, index) => {
    const { tasks }  = this.state;

    this.setState({
      index,
      newTask: tasks[index]
    })
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

        <Form
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}
