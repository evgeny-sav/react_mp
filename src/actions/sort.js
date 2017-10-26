import * as constants from '../constants.json';

const sort = payload => ({
  type: constants.SORT,
  payload,
});

export default sort;
