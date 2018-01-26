import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/main.css';
import apps from './apps.json';

import { getRandomEmoji, getRandomTitle } from './window-title-builder';

import AppGrid from './components/AppGrid';

class App extends Component {
  componentWillMount() {
    const emoji = getRandomEmoji();
    const title = getRandomTitle();

    document.title = `${emoji} ${title}`;
  }

  render() {
    return <AppGrid apps={apps} />;
  }
}
const reactRoot = document.createElement('div');
reactRoot.id = 'react-root';

document.body.appendChild(reactRoot);

ReactDOM.render(<App />, reactRoot);
