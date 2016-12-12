import * as types from './actionTypes';

export const testAction = () => ({
  type: types.TEST_ACTION
});

const testAsyncActionStart = () => {
  return {
    type: types.TEST_ASYNC_ACTION
  };
};

export const testAsyncAction = () => {
  return (dispatch) => {
    dispatch(testAsyncActionStart());
    const asyncValue = 1234;
    setTimeout(() => {
      dispatch({
        type: types.RECEIVE_TEST_ASYNC_ACTION,
        data: asyncValue
      });
    }, 2000);
  };
};
