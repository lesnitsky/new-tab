import React from 'react';
import { render } from 'react-dom';

require('./styles/main.css');
const apps = require('./apps');

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

const reactRoot = document.createElement('div');
reactRoot.id = 'react-root';

document.body.appendChild(reactRoot);

render(<App />, reactRoot);
