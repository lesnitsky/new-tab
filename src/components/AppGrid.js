import React from 'react';

import './app-grid.css';
import AppTile from './AppTile';

export default class AppGrid extends React.Component {
  render() {
    return (
      <div className="app-grid">
        { this.props.apps.map(app => <AppTile key={app.id} app={app} />) }
      </div>
    )
  }
}
