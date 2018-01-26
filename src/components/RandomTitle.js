import React from 'react';

import { getRandomEmoji, getRandomTitle } from '../window-title-builder';

export default class RandomTitle extends React.Component {
  componentWillMount() {
    const emoji = getRandomEmoji();
    const title = getRandomTitle();

    document.title = `${emoji} ${title}`;
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return null;
  }
}
