/*
 * Default values
 */

const defaultParams = {
  api_key: `${process.env.REACT_APP_API_KEY}`,
  language: 'en-US',
  page: 1,
};
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export { defaultParams, defaultHeaders };
