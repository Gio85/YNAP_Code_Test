import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import ConversionNew from './components/NewConversion';

import 'bulma';
import './scss/style.scss';

class App extends React.Component {

  render() {
    return(
      <Router>
        <main>
          <Navbar />
          <section className="section">
            <div className="helmet"></div>
            <div className="container">
              <Switch>
                <Route path="/conversions/new" component={ConversionNew} />
                <Route exact path="/*" component={Home} />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
