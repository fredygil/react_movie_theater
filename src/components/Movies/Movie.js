import React, { Component } from 'react';
import { Card } from 'antd';
import { imageURL } from '../../lib/urls';

const { Meta } = Card;

const Movie = (props) => {
  return (
    <Card
      hoverable
      bordered={false}
      headStyle={{ width: '100%', height: 'auto' }}
      bodyStyle={{
        padding: 0,
        marginTop: 8,
        marginBottom: 8,
      }}
      cover={
        <img alt={props.title + ' poster'} src={imageURL(props.poster_path)} />
      }
    ></Card>
  );
};

export default Movie;
