import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configStore from './store/configStore';
import { ConfigProvider } from 'antd';
import enUS from 'antd/es/locale/en_US';
import App from './App';

const store = configStore();

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConfigProvider locale={enUS}>
          <App />
        </ConfigProvider>
      </Provider>
    );
  }
}

export default Root;
