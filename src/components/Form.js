/* eslint react/prop-types: 0 */
import React from 'react';

const Form = ({ handleChange, handleSubmit, data }) => {
  return (
    <form className="form_container" onSubmit={handleSubmit}>
      <div className="field">
        <label>Roman Number</label>
        <input
          className="input"
          name="letter"
          placeholder="Type your Roman Number in letters"
          onChange={handleChange}
          value={data.letter || ''}
          data={data.letter}
        />
      </div>
      <div className="field">
        <label>Integer</label>
        <input
          className="input"
          name="integer"
          placeholder="Type your number"
          onChange={handleChange}
          value={data.integer || ''}
          data={data.integer}
        />
      </div>
      <button className="button is-primary">Convert</button>
    </form>
  );
};

module.exports = Form;