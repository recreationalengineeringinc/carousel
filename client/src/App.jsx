import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    };
  }


  render () {
    return (
      <Carousel />
    );
  }
}

