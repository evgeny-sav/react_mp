import constants from '../constants';

export const sort = payload => ({
  type: constants.SORT,
  payload,
});

export default sort;
