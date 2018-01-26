import React from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';
import apps from './apps.json';

import AppGrid from './components/AppGrid';
import RandomTitle from './components/RandomTitle';

const App = () => (
  <div>
    <RandomTitle />
    <AppGrid apps={apps} />
  </div>
)

const reactRoot = document.createElement('div');
reactRoot.id = 'react-root';

document.body.appendChild(reactRoot);

ReactDOM.render(<App />, reactRoot);
