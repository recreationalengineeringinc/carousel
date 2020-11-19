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
      cardObject: dummydata[0].items[0],
      buttonStatus: true,
      x: 10
    };
  }

  nextCard () {
    // go to the next card by incrementing the id property on the card
    // card ids start at 1, so index 0 in the array is id 1
    // const newIndex = this.state.cardObject.id + 1;

    // need to get all the classname cards elements and change its translate x
    // translateX(-990px) on the cards shows last 6 cards
    // const allCards = document.getElementsByClassName('cards');
    // allCards.setAttribute('transform', 'translateX(-990px)');
    // allCards.style.transform('translateX(-990px)');
    // debugger;
    // for (let i = 0; i < allCards.length; i++) {
    //   console.log('in the loop!')
    //   allCards[i].setAttribute('transform', 'translateX(-990px)');
    // }
    // console.log('allCards: ', allCards);
    this.setState({cardObject: dummydata[0].items[this.state.cardObject.id], buttonStatus: !this.state.buttonStatus, x: -990});
  }

  previousCard () {
    // const newIndex = this.state.cardObject.id - 2;
    // need to get all the classname cards elements and change its translate x
    // translateX(10px) shows the first 6 cards
    this.setState({cardObject: dummydata[0].items[this.state.cardObject.id - 2], buttonStatus: !this.state.buttonStatus, x: 10});
  }

  componentDidMount () {
    // e.preventDefault();
  }

  render () {
    const {cardObjectsArray, cardObject, buttonStatus, x} = this.state;
    return (
      <div id="product-recommendations">
        <aside>
          <div className="cards-slider">

            <div className="people-also-liked">
              People Also Liked
            </div>

            <div className="cards-slider-wrapper">
              {cardObjectsArray.map((card, index) => <Card /*key={cardObject._id}*/ key={index} card={card} x={x}/>)}

              <button type="button" className="carousel-btn carousel-btn--left" onClick={() => this.previousCard()} disabled={buttonStatus} >
                <svg>
                  <path d="M7.415 11l3.295-3.295a1 1 0 00-1.417-1.412l-4.98 4.98a.997.997 0 00-.025 1.429l5.005 5.005a1 1 0 101.414-1.414L7.414 13H19a1 1 0 000-2H7.415z">
                  </path>
                </svg>
              </button>

              <button type="button" className="carousel-btn carousel-btn--right" onClick={() => this.nextCard()} disabled={!buttonStatus} >
                <svg>
                  <path className="button-arrow" d="M16.585 13l-3.295 3.295a1 1 0 001.417 1.412l4.98-4.98a.997.997 0 00.025-1.429l-5.005-5.005a1 1 0 00-1.414 1.414L16.586 11H5a1 1 0 000 2h11.585z">
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