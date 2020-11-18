import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './Carousel.jsx';
import axios from 'axios';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount () {
    axios.get('/product/:id')
      .then((response) => {
        console.log('response from server: ', response.data);
        this.setState({items: response.data[0]});
      })
  }


  render () {
    return (
      <div><Carousel page={this.state.items} /></div>
    );
  }

}

export default App;