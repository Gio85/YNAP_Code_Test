import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-end">
          <Link className="navbar-item" to="/">Home</Link>
          <Link to="/conversions/new" className="navbar-item">Convert a number</Link>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
