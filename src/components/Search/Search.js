import React from 'react';
import { connect } from 'react-redux';
import { fetchMovies, fetchMoviesFromSearch } from '../../store/actions';
import { Input } from 'antd';

const Search = (props) => {
  const { dispatch } = props;
  return (
    <div className="search-box">
      <Input.Search
        placeholder="Search for a movie..."
        onSearch={(value) => dispatch(fetchMoviesFromSearch(value))}
        enterButton
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  const { isFetching, lastUpdated, movies } = state;
  return {
    movies: movies || [],
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(Search);
