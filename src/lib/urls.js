// Poster sizes
//"w92", "w154", "w185", "w342", "w500", "w780", "original"
const POSTER_SIZE = 'w185';
const imageURL = (relativePath) =>
  `${process.env.REACT_APP_API_IMAGES}${POSTER_SIZE}${relativePath}`;

export { imageURL };
