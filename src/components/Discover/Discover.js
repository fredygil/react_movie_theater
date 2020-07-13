import React, { Component } from 'react';
import { connect } from 'react-redux';
import Movies from '../Movies/Movies';
import { fetchMoviesIfNeeded } from '../../store/actions';
import { Spin } from 'antd';
import { FireOutlined } from '@ant-design/icons';

class Discover extends Component {
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(fetchMoviesIfNeeded());
  };

  render() {
    const { movies, isFetching } = this.props;
    return (
      <div>
        {isFetching && movies.length === 0 && <Spin tip="Loading..."></Spin>}
        {movies.length > 0 && (
          <Movies
            title={
              <div>
                <FireOutlined style={{ color: '#FAA195' }} /> Popular Movies
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
  const { isFetching, lastUpdated, movies } = state;
  return {
    movies: movies || [],
    isFetching,
    lastUpdated,
  };
};

export default connect(mapStateToProps)(Discover);
