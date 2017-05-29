import React from 'react';

import { getRandomEmoji, getRandomTitle } from '../window-title-builder';

export class RandomTitle extends React.Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }

  componentWillMount() {
    const emoji = getRandomEmoji();
    const title = getRandomTitle();

    document.title = `${emoji} ${title}`;
  }
}
