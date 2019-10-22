import { seriesConstants } from 'redux/constants';
// import _ from 'lodash';

import feedData from 'assets/feed/sample.json';

export const seriesActions = {
  getSeries
};

/**
 * request series list
 *
 * Since API is not given, I tried to mimic promise constructor
 * It will always fetch date from sample.json
 */
function getSeries() {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(feedData));

    /**
     * If API is available, we could use below code for API call.
     */

    // seriesService.getSeries()
    //   .then((res) => {
    //     dispatch(success(res));
    //   })
    //   .catch((err) => {
    //     dispatch(failure(err));
    //   });
  };

  function request(data) {
    return {type: seriesConstants.SERIES_REQUEST, data};
  }
  function success(data) {
    return {type: seriesConstants.SERIES_SUCCESS, data};
  }
  // function failure(err) {
  //   return {type: seriesConstants.SERIES_FAILURE, err};
  // }
}
