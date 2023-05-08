import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import data from './dummydata.js'


const App = () => {
  const [cards, setCards] = useState([])
  const [x, setX] = useState(0)

  useEffect(() => {
    setCards(dummyData[0].items)
  }, [setCards])

  const nextCard = () => {
    let rightButton = document.getElementsByClassName('carousel-btn--right')
    rightButton[0].classList.add('carousel-btn-click')
    let leftButton = document.getElementsByClassName('carousel-btn--left')
    leftButton[0].classList.remove('carousel-btn-click')

    setX(-1012)

    setTimeout(() => {
      let leftButton = document.getElementsByClassName('carousel-btn--left')
      let rightButton = document.getElementsByClassName('carousel-btn--right')
      leftButton[0].style.display = 'flex'
      rightButton[0].style.display = 'none'
    }, 400)
  }

  const previousCard = () => {
    let rightButton = document.getElementsByClassName('carousel-btn--right')
    rightButton[0].classList.remove("carousel-btn-click")
    let leftButton = document.getElementsByClassName('carousel-btn--left')
    leftButton[0].classList.add("carousel-btn-click")

    setX(0)

    setTimeout(() => {
      let leftButton = document.getElementsByClassName('carousel-btn--left')
      let rightButton = document.getElementsByClassName('carousel-btn--right')
      leftButton[0].style.display = 'none'
      rightButton[0].style.display = 'flex'
    }, 400)
  }

  return (
    <>
      <div id="product-recommendations">
        <aside>
          <div className="cards-slider">
            <div className="people-also-liked">
              People also liked
            </div>
            <div className="cards-slider-wrapper">
              {cards.map((card, index) => <Card key={index} card={card} x={x} />)}
              <button className="carousel-btn carousel-btn--left" onClick={() => previousCard()} >
                <FontAwesomeIcon icon={faArrowLeft} size='xs' />
              </button>
              <button className="carousel-btn carousel-btn--right" onClick={() => nextCard()} >
                <FontAwesomeIcon icon={faArrowRight} size='xs' />
              </button>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}

export default App
