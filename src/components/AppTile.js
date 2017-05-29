import React from 'react';

require('./app-tile.css');

export class AppTile extends React.Component {
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
