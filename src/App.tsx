import React, { Component } from 'react';
import './App.css';
import AppComponent from './components/App';
import { store } from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider> 
    );
  }
}

export default App;
