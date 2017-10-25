import PropTypes from 'prop-types';
import React from 'react';
import Maybe from 'react-maybe';

import {
  INFINITE_SCROLL_STATUS_FAILED,
  INFINITE_SCROLL_STATUS_MORE_FAILED,
  INFINITE_SCROLL_STATUS_MORE_REQUESTED,
  INFINITE_SCROLL_STATUS_MORE_SUCCEEDED,
  INFINITE_SCROLL_STATUS_REQUESTED,
  INFINITE_SCROLL_STATUS_SUCCEEDED,
} from './status';

const isFailed = status => status === INFINITE_SCROLL_STATUS_FAILED;
const isRequested = status => status === INFINITE_SCROLL_STATUS_REQUESTED;

const InfiniteScrollr = ({ failed, requested, status }) => (
  <Maybe
    of={status}
    map={isRequested}
    either={requested}
    orElse={<Maybe of={status} map={isFailed} either={failed} orElse={() => null} />}
  />
);

InfiniteScrollr.propTypes = {
  failed: PropTypes.node,
  requested: PropTypes.node,
  status: PropTypes.oneOf([
    INFINITE_SCROLL_STATUS_FAILED,
    INFINITE_SCROLL_STATUS_MORE_FAILED,
    INFINITE_SCROLL_STATUS_MORE_REQUESTED,
    INFINITE_SCROLL_STATUS_MORE_SUCCEEDED,
    INFINITE_SCROLL_STATUS_REQUESTED,
    INFINITE_SCROLL_STATUS_SUCCEEDED,
  ]),
};

InfiniteScrollr.defaultProps = {
  failed: undefined,
  requested: undefined,
  status: INFINITE_SCROLL_STATUS_REQUESTED,
};

export default InfiniteScrollr;
