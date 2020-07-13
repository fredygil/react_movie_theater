import React from 'react';
import { Card, Avatar, Row, Col, Rate, Descriptions } from 'antd';
import { imageURL } from '../../lib/urls';
const { Meta } = Card;

const MovieDetail = (props) => {
  return (
    <div>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <Card
            style={{ width: 400 }}
            cover={
              <img
                alt="example"
                src={imageURL(props.poster_path)}
                className="responsive-image-70"
              />
            }
          >
            <Meta
              title={
                <span>
                  {props.vote_average}/10 <Rate value={1} count={1} disabled />
                  {'  ' +
                    props.title +
                    ' (' +
                    props.release_date.substr(0, 4) +
                    ')'}
                </span>
              }
              description={props.overview}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetail;
