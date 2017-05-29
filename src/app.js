import React from 'react';
import { render } from 'react-dom';

require('./styles/main.css');
const apps = require('../apps');

import { AppGrid } from './components/AppGrid';
import { RandomTitle } from './components/RandomTitle';


class App extends React.Component {
  render() {
    return (
      <div>
        <RandomTitle />
        <AppGrid apps={apps} />
      </div>
    );
  }
}

render(<App />, document.querySelector('#react-root'));
