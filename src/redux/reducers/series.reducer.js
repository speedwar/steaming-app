import { seriesConstants } from './../constants';
import { dynamicSort } from './../../utils';

const initialState = {
};

export function series(state = initialState, action) {
  switch (action.type) {
    case seriesConstants.SERIES_REQUEST:
      return {
        ...state,
        seriesListRequesting: true,
        seriesListSuccess: false,
        seriesListFailure: false,
      };
    case seriesConstants.SERIES_SUCCESS:
      const fetchedData = action.data;

      // List filtering should be done in another call or in component level
      const filteredSeriesList = fetchedData.entries.filter(series => series.programType === 'series' && series.releaseYear >= 2010 );

      // Ascending alphanumeric order and show first 21 cards
      const sortedSeriesList = filteredSeriesList.sort(dynamicSort('title')).slice(0, 21);

      return {
        ...state,
        seriesListRequesting: false,
        seriesListSuccess: true,
        seriesListFailure: false,
        seriesListData: sortedSeriesList
      };
    case seriesConstants.SERIES_FAILURE:
      return {
        ...state,
        seriesListRequesting: false,
        seriesListSuccess: false,
        seriesListFailure: true,
      };
    default:
      return state;
  }
}
