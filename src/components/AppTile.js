import React from 'react';

import './app-tile.css';

export default class AppTile extends React.Component {
  render() {
    const { app } = this.props;

    return (
      <div className="app-tile">
        <a href={app.href}>
          <img src={app.logo} />
        </a>
      </div>
    )
  }
}
