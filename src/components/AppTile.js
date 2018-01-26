import React from 'react';

import './app-tile.css';

const AppTile = ({ app }) => (
  <div className="app-tile">
    <a href={app.href}>
      <img src={app.logo} />
    </a>
  </div>
)

export default AppTile;
