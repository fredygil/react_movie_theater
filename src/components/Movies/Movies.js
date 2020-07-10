import React, { Component } from 'react';
import Movie from './Movie';
import { Col, Row, Card } from 'antd';

const Movies = (props) => {
  return (
    <Card title={props.title} bordered={false}>
      <Row gutter={16}>
        {props.data &&
          props.data.map((movie) => {
            return (
              <Col span={8} key={movie.id}>
                <Movie {...movie}></Movie>
              </Col>
            );
          })}
      </Row>
    </Card>
  );
};

export default Movies;
