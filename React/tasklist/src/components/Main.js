import React, { Component } from 'react';
import './Main.css'

// Form
import { FaPlus } from 'react-icons/fa'

export default class Main extends Component {
  state = {
    newTask: '',
  }

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask } = this.state;

    return (
      <div className='main'>
        <h1>Tasklist</h1>

        <form action="#" className='form'>
          <input
            onChange={this.handleInputChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <p> {newTask} </p>
      </div>
    )
  }
}
