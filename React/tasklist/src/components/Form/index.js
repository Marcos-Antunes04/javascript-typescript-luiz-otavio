import React from "react";
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import './form.css';

export default function Form({handleSubmit, handleInputChange, newTask}) {
  return(
    <form onSubmit={handleSubmit} className='form' action="#">
      <input onChange={handleInputChange} type="text" value={newTask} className="taskname" />

      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}

// Form.defaultProps = {
//   newTask: 'Default Value'
// }

Form.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
}
