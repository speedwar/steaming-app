import React, { useEffect } from 'react';
import StLayout from 'components/layouts/StLayout';
import StProgramCard from 'components/partials/StProgramCard';
import { connect } from 'react-redux';
import { movieActions } from 'redux/actions';

const SfMovie = (props) => {
  useEffect(() => {
    const { dispatch } = props;
    dispatch(movieActions.getMovies());
  }, []);

  const { movieListData, movieListRequesting, movieListSuccess, movieListFailure } = props;
  const movieList = (
    <div className="st-program-card__list">
      {movieListData && movieListData.map((card, i) => (
        <StProgramCard
          key={`movie-card-${i}`}
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
              {movieListRequesting && 'Loading...'}
              {movieListSuccess && movieList}
              {movieListFailure && 'Oops, something went wrong...'}
            </div>
          </div>
        </div>
      </div>
    </StLayout>
  )
}

function mapStateToProps(state) {
  const {
    movieListData,
    movieListRequesting,
    movieListSuccess,
    movieListFailure
  } = state.movie;
  return {
    movieListData,
    movieListRequesting,
    movieListSuccess,
    movieListFailure
  };
}

export default connect(mapStateToProps)(SfMovie);
