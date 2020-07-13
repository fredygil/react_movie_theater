import React from 'react';
import { connect } from 'react-redux';
import { setRateFilter } from '../../store/actions';
import { Rate } from 'antd';

const RateFilter = (props) => {
  const { rate, dispatch } = props;

  return (
    <Rate value={rate} onChange={(value) => dispatch(setRateFilter(value))} />
  );
};

const mapStateToProps = (state) => {
  return {
    rate: state.rate,
  };
};

export default connect(mapStateToProps)(RateFilter);
