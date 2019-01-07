/* eslint react/prop-types: 0 */
import React from 'react';
import Axios from 'axios';
import Form from './Form';

class NewConversion extends React.Component {
  state = {}

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    Axios.post('/api/conversions', this.state)
      .then(res => this.setState({ result: res.data, integer: '', letter: '' }))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render() {
    return (
      <div className="result_container">
        <div className="result">
          {!this.state.result && <h1>The result will be shown here.</h1>}
          {this.state.result && <h1>The result is: {this.state.result}</h1>}
        </div>
        <Form
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }



}

export default NewConversion;
