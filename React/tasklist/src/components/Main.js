import React, { Component } from 'react';
import './Main.css'

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

        <form action="#">
          <input onChange={this.handleInputChange} type="text" />
          <button type="submit">Send</button>
        </form>

        <p> {newTask} </p>
      </div>
    )
  }
}
