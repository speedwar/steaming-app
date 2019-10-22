import React, { useEffect } from 'react';
import StLayout from 'components/layouts/StLayout';
import StProgramCard from 'components/partials/StProgramCard';
import { connect } from 'react-redux';
import { seriesActions } from 'redux/actions';

const SfSeries = (props) => {
  useEffect(() => {
    const { dispatch } = props;
    dispatch(seriesActions.getSeries());
  }, []);

  const { seriesListData, seriesListRequesting, seriesListSuccess, seriesListFailure } = props;
  const seriesList = (
    <div className="st-program-card__list">
      {seriesListData && seriesListData.map((card, i) => (
        <StProgramCard
          key={`series-card-${i}`}
          title={card.title}
          src={card.images['Poster Art'].url}
        />
      ))}
    </div>
  );

  return (
    <StLayout>
      <div className="st-scrollable-content">
        <div className="container">
          <div className="row">
            <div className="col">
              {seriesListRequesting && 'Loading...'}
              {seriesListSuccess && seriesList}
              {seriesListFailure && 'Oops, something went wrong...'}
            </div>
          </div>
        </div>
      </div>
    </StLayout>
  )
}

function mapStateToProps(state) {
  const {
    seriesListData,
    seriesListRequesting,
    seriesListSuccess,
    seriesListFailure
  } = state.series;
  return {
    seriesListData,
    seriesListRequesting,
    seriesListSuccess,
    seriesListFailure
  };
}

export default connect(mapStateToProps)(SfSeries);
