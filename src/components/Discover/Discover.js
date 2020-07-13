import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
import { fetchMoviesIfNeeded } from '../../store/actions';
import { Spin } from 'antd';
import { FireOutlined, SearchOutlined } from '@ant-design/icons';

class Discover extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchMoviesIfNeeded());
  };

  render() {
    const { movies, isFetching, origin } = this.props;
    const title =
      ' ' + (origin === 'discover' ? 'Popular Movies' : 'Search Results');
    return (
      <div>
        {isFetching && movies.length === 0 && <Spin tip="Loading..."></Spin>}
        {movies.length > 0 && (
          <Movies
            title={
              <div>
                {origin === 'discover' && (
                  <FireOutlined style={{ color: '#FAA195' }} />
                )}
                {origin === 'search' && (
                  <SearchOutlined style={{ color: '#40A9FF' }} />
                )}
                {title}
              </div>
            }
            data={this.props.movies}
          ></Movies>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { isFetching, lastUpdated, movies, origin } = state;
  return {
    movies: movies || [],
    isFetching,
    lastUpdated,
    origin,
  };
};

export default connect(mapStateToProps)(Discover);
