import { movieConstants } from './../constants';
// import _ from 'lodash';

import feedData from 'assets/feed/sample.json';

export const movieActions = {
  getMovies
};

/**
 * request movie list
 *
 * Since API is not given, I tried to mimic promise constructor
 * It will always fetch date from sample.json
 */
function getMovies() {
  return (dispatch) => {
    dispatch(request());
    dispatch(success(feedData));

    /**
     * If API is available, we could use below code for API call.
     */

    // movieService.getMoives()
    //   .then((res) => {
    //     dispatch(success(res));
    //   })
    //   .catch((err) => {
    //     dispatch(failure(err));
    //   });
  };

  function request(data) {
    return {type: movieConstants.MOVIE_REQUEST, data};
  }
  function success(data) {
    return {type: movieConstants.MOVIE_SUCCESS, data};
  }
  // function failure(err) {
  //   return {type: movieConstants.MOVIE_FAILURE, err};
  // }
}
