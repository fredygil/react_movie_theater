import React, { Component } from 'react';
import { Card } from 'antd';
import { imageURL } from '../../lib/urls';

const { Meta } = Card;

const Movie = (props) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img alt={props.title + ' poster'} src={imageURL(props.poster_path)} />
      }
    >
      <Meta title={props.title} />
    </Card>
  );
};

export default Movie;
