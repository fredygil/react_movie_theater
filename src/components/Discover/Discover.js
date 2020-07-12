import React, { Component } from 'react';
import queryString from 'query-string';
import { defaultParams, defaultHeaders } from '../../lib/defaults';
import Movies from '../Movies/Movies';
import { FireOutlined } from '@ant-design/icons';

class Discover extends Component {
  state = {
    loading: true,
    page: 1,
    movies: [],
  };

  componentDidMount = () => {
    const _this = this;
    //Query params for endPoint
    const params = {
      ...defaultParams,
      sort_by: 'popularity.desc',
      include_adult: 'false',
      include_video: 'false',
      page: this.state.page,
    };

    //Endpoint complete URL
    const endPoint = `${
      process.env.REACT_APP_API_ENDPOINT
    }/discover/movie?${queryString.stringify(params)}`;

    //Do the fetch
    fetch(`${endPoint}`, {
      method: 'GET',
      headers: {
        ...defaultHeaders,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        //_this.setState({ ...jsonObject, loading: false });
        _this.setState({ movies: jsonObject.results });
      });
  };

  render() {
    return (
      <div>
        <Movies
          title={
            <div>
              <FireOutlined style={{ color: '#FAA195' }} /> Popular Movies
            </div>
          }
          data={this.state.movies}
        ></Movies>
      </div>
    );
  }
}

export default Discover;
