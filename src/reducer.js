import {
  INFINITE_SCROLL_STATUS_FAILED,
  INFINITE_SCROLL_STATUS_MORE_FAILED,
  INFINITE_SCROLL_STATUS_MORE_REQUESTED,
  INFINITE_SCROLL_STATUS_MORE_SUCCEEDED,
  INFINITE_SCROLL_STATUS_REQUESTED,
  INFINITE_SCROLL_STATUS_SUCCEEDED,
} from './status';

const defaultState = { status: INFINITE_SCROLL_STATUS_REQUESTED };

export default (FAILED, REQUESTED, SUCCEEDED, MORE_FAILED, MORE_REQUESTED, MORE_SUCCEEDED) =>
  (state = defaultState, action = {}) => {
    switch (action.type) {
      case FAILED:
        return { error: action.payload, status: INFINITE_SCROLL_STATUS_FAILED };
      case REQUESTED:
        return { status: INFINITE_SCROLL_STATUS_REQUESTED };
      case SUCCEEDED:
        return { payload: action.payload, status: INFINITE_SCROLL_STATUS_SUCCEEDED };
      case MORE_FAILED:
        return {
          error: action.payload,
          payload: state.payload,
          status: INFINITE_SCROLL_STATUS_MORE_FAILED,
        };
      case MORE_REQUESTED:
        return { payload: state.payload, status: INFINITE_SCROLL_STATUS_MORE_REQUESTED };
      case MORE_SUCCEEDED:
        return {
          payload: [...(state.payload || []), ...(action.payload || [])],
          status: INFINITE_SCROLL_STATUS_MORE_SUCCEEDED,
        };
      default:
        return state;
    }
  };
