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

const getRandomItemFromCollection = (collection) => {
  const randIndex = rand(collection.length);

  return collection[randIndex];
}

export const getRandomEmoji = () => getRandomItemFromCollection(emojis);

export const getRandomTitle = () => getRandomItemFromCollection(titles);
