import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import axios from 'axios';
// import dummy data
import dummydata from './dummydata.js';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      cardObjectsArray: dummydata[0].items,
      cardObject: dummydata[0].items[0]
    };
  }

  nextCard () {
    console.log('clicked Rite!');
    // debugger;
    // go to the next card by incrementing the id property on the card
    // card ids start at 1, so index 0 in the array is id 1
    // const newIndex = this.state.cardObject.id + 1;
    this.setState({cardObject: dummydata[0].items[this.state.cardObject.id]});
  }

  previousCard () {
    console.log('clicked Left!');
    // debugger;
    // const newIndex = this.state.cardObject.id - 2;
    this.setState({cardObject: dummydata[0].items[this.state.cardObject.id - 2]});
  }

  componentDidMount () {
    // e.preventDefault();
  }

  render () {
    return (
      <div>
        <aside>
          <div>

            <div>
              People Also Liked
            </div>

            <div>
              <Card card={this.state.cardObject} />
              <button type="button" onClick={() => this.previousCard()}
              // disabled when we're at the first card
              disabled={this.state.cardObject.id === 1}
              >Left
                <svg>
                  <path>
                  </path>
                </svg>
              </button>
              <button type="button" onClick={() => this.nextCard()}
              // disabled when we're at the last card
              disabled={this.state.cardObject.id === this.state.cardObjectsArray.length}
              >Right
                <svg>
                  <path>
                  </path>
                </svg>
              </button>
            </div>

          </div>
        </aside>
      </div>
    );
  }
}

export default App;

// disabled={this.state.firstCardObject.id === 1}
// disabled={this.state.firstCardObject.id === this.state.cardObjectsArray.length}

// The object I grab from my data depends on the id
// each path id has to be connected to a specific obj
// The query in the server side will take the specific id to get the specific object from the db
// Do I need a router for each type of get request to the db
// onComponent did mount will take an argument which will be the id, then that id can be passed to the axios request path for the specific router that'll handle that query

  // componentDidMount () {
    // e.preventDefault();
    // axios.get('/product/:id')
    //   .then((response) => {
    //     console.log('response from server: ', response.data);
    //     this.setState({cardObjectsArray: response.data[0]});
    //   })

    // this.setState({cardObjectsArray: dummydata[0].items});
    // dummydata is an array of objects. each object contains an items property.
    // items is an array of 12 objects
    // each object is a an item "card" contains all the ifo for a specific item
    // set a
  // }