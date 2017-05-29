const emojis = [
  '🐱',
  '🌈',
  '️🦄️',
  '👻',
  '🎃'
];

const titles = [
  'null',
  'undefined',
  'NaN',
  '[object Object]',
  '[object Array]',
];


const rand = n => Math.floor(Math.random() * n);

function getRandomItemFromCollection(collection) {
  const randIndex = rand(collection.length);

  return collection[randIndex];
}

export function getRandomEmoji() {
  return getRandomItemFromCollection(emojis);
}

export function getRandomTitle() {
  return getRandomItemFromCollection(titles);
}
