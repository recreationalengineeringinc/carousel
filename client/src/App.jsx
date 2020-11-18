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
      dataPages: []
    };
  }

  componentDidMount () {
    // e.preventDefault();
    // axios.get('/product/:id')
    //   .then((response) => {
    //     console.log('response from server: ', response.data);
    //     this.setState({dataPages: response.data[0]});
    //   })

    this.setState({dataPages: dummydata[0].items});
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
              <Card page={this.state.dataPages} />
              <button type="button">
                <svg>
                  <path>
                  </path>
                </svg>
              </button>
              <button type="button">
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



// The object I grab from my data depends on the id
// each path id has to be connected to a specific obj
// The query in the server side will take the specific id to get the specific object from the db
// Do I need a router for each type of get request to the db
// onComponent did mount will take an argument which will be the id, then that id can be passed to the axios request path for the specific router that'll handle that query