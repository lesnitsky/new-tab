import React from 'react';

import { AppTile } from './AppTile';

require('./app-grid.css');

export class AppGrid extends React.Component {
  render() {
    return (
      <div className="app-grid">
        { this.props.apps.map(app => <AppTile key={app.id} app={app} />) }
      </div>
    )
  }
}
