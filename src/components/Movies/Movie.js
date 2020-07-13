import React, { Component } from 'react';
import { Card, Modal, Button } from 'antd';
import { imageURL } from '../../lib/urls';
import MovieDetail from './MovieDetail';
import movies from '../../store/reducer';

const { Meta } = Card;

class Movie extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const { props } = this;

    return (
      <div>
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
            <img
              alt={props.title + ' poster'}
              src={imageURL(props.poster_path)}
            />
          }
          onClick={this.showModal}
        ></Card>

        <Modal
          title=""
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="_"
          cancelText="_"
          maskClosable={true}
        >
          <MovieDetail {...this.props}></MovieDetail>
        </Modal>
      </div>
    );
  }
}

export default Movie;
