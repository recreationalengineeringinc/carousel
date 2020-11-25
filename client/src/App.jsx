import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import data from './dummydata.js'


class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cardObjectsArray: [],
      cardObject: {},
      buttonStatus: true,
      x: 0
    };
  }

  nextCard () {
    let rightButton = document.getElementsByClassName('carousel-btn--right');
    rightButton[0].classList.add("carousel-btn-click");
    let leftButton = document.getElementsByClassName('carousel-btn--left');
    leftButton[0].classList.remove("carousel-btn-click");
    // By default the right button had its display to flex
    // By default the left button has its display to none
    // setState for x
    this.setState({x: -1012});
    // on setTimeout, set the right button display to none AND the left to flex
    setTimeout(()=>{
      let leftButton = document.getElementsByClassName('carousel-btn--left');
      console.log(leftButton);
      // leftButton.setAttribute('display', 'flex');
      let rightButton = document.getElementsByClassName('carousel-btn--right');
      // rightButton.setAttribute('display', 'none');
      leftButton[0].style.display ='flex';
      rightButton[0].style.display ='none';
    }, 400);

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
    // this.setState({buttonStatus: !this.state.buttonStatus, x: -990});
  }

  previousCard () {
    let rightButton = document.getElementsByClassName('carousel-btn--right');
    rightButton[0].classList.remove("carousel-btn-click");
    let leftButton = document.getElementsByClassName('carousel-btn--left');
    leftButton[0].classList.add("carousel-btn-click");
    // By default,
    // on setState add the display attribute to button
    this.setState({x: 0});
    // then, on setTimeout, set the display attribute to for the left button to none
    // and the display attribute of the right button to flex
    setTimeout(()=>{
      let leftButton = document.getElementsByClassName('carousel-btn--left');
      console.log(leftButton);
      // leftButton.setAttribute('display', 'flex');
      let rightButton = document.getElementsByClassName('carousel-btn--right');
      // rightButton.setAttribute('display', 'none');
      leftButton[0].style.display ='none';
      rightButton[0].style.display ='flex';
    }, 400);
    // const newIndex = this.state.cardObject.id - 2;
    // need to get all the classname cards elements and change its translate x
    // translateX(10px) shows the first 6 cards
    // this.setState({buttonStatus: !this.state.buttonStatus, x: 10});
  }

  componentDidMount () {
    // console.log('current location:', window.location.pathname);
    axios.get('/related-items')
    // axios get request path has to change to something like this `${window.location.pathname}`
      .then((response) => {
        this.setState({cardObjectsArray: response.data[0].items})
      // console.log('response.data: ', response.data[0].items);
      })
      .catch((err) => {
        console.log(err);
      })
    // this.setState({
    //   cardObjectsArray: data[0].items
    // })
  }


  render () {
    const {cardObjectsArray, cardObject, buttonStatus, x} = this.state;
    // console.log('this is x: ', x);
    return (
      <div id="product-recommendations">
        <aside>
          <div className="cards-slider">

            <div className="people-also-liked">
              People also liked
            </div>

            <div className="cards-slider-wrapper">
              {cardObjectsArray.map((card, index) => <Card /*key={cardObject._id}*/ key={index} card={card} x={x}/>)}

            {/* <div className="carousel-btn carousel-btn--left" style={{display: buttonStatus ? 'none' : 'flex'}}>
              <i className="fa fa-long-arrow-left" onClick={() => this.previousCard()}></i>
            </div> */}
            <button className="carousel-btn carousel-btn--left" /*style={{display: buttonStatus ? 'none' : 'flex'}}*/ onClick={() => this.previousCard()} >
            {/* &#129104; */}
            <FontAwesomeIcon icon={faArrowLeft} size='xs' />

            </button>

            {/* <div className="carousel-btn carousel-btn--right" style={{display: buttonStatus ? 'flex' : 'none'}}> */}
              <button className="carousel-btn carousel-btn--right" /*style={{display: buttonStatus ? 'flex' : 'none'}}*/ onClick={() => this.nextCard()} >
                {/* &#129106; */}
                <FontAwesomeIcon icon={faArrowRight} size='xs' />

                </button>
            {/* </div> */}


            </div>
          </div>
        </aside>
      </div>
    );
  }
}
// container for each photo and specify the size for the container
// for the photo, specify the photo size, object-fit: contain
export default App;

{/* <svg>
<path className="button-arrow" d="M16.585 13l-3.295 3.295a1 1 0 001.417 1.412l4.98-4.98a.997.997 0 00.025-1.429l-5.005-5.005a1 1 0 00-1.414 1.414L16.586 11H5a1 1 0 000 2h11.585z">
</path>
</svg> */}

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

  // <svg>
  // <path d="M7.415 11l3.295-3.295a1 1 0 00-1.417-1.412l-4.98 4.98a.997.997 0 00-.025 1.429l5.005 5.005a1 1 0 101.414-1.414L7.414 13H19a1 1 0 000-2H7.415z"></path>
  // </svg>

  // left arrow &#129104;
  // rite arrow &#129106;