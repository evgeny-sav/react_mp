import constants from '../constants';

const sort = payload => ({
  type: constants.SORT,
  payload,
});

export default sort;
