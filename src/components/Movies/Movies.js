import React, { Component } from 'react';
import Movie from './Movie';
import { Col, Row, Card } from 'antd';

const Movies = (props) => {
  return (
    <Card
      title={props.title}
      bordered={false}
      headStyle={{ fontSize: '1.3vw', fontWeight: 'bold' }}
    >
      <Row gutter={16}>
        {props.data &&
          props.data.map((movie) => {
            return (
              <Col span={6} key={movie.id}>
                <Movie {...movie}></Movie>
              </Col>
            );
          })}
      </Row>
    </Card>
  );
};

export default Movies;
