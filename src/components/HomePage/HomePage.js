import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import Discover from '../Discover/Discover';
import Search from '../Search/Search';
import poster from '../../assets/posters/6.jpg';

const HomePage = (props) => {
  return (
    <div className="home-page">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={3}></Col>
        <Col className="gutter-row" span={18}>
          <Row justify="center">
            <Col span={24}>
              {' '}
              <img src={poster} className="responsive-image" alt="Poster" />
              <div className="head-title">
                Welcome! Find movies by your local teather
              </div>{' '}
              <Search></Search>
            </Col>
            <Col span={2}></Col>
            <Col span={20} className="movies-col">
              <Discover></Discover>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Col>
        <Col className="gutter-row" span={3}></Col>
      </Row>
    </div>
  );
};

export default HomePage;
