import React from 'react';
import {mount, shallow} from enzyme;
import App from '../client/App.jsx';

it('Expect button to be disabled after click.', () => {
  const wrapper = mount(<App />);
  const button = wrapper.find('button');
  // check the status of the buttons
  // simulate a click
  // check that the values reversed

  expect(button).toBe();
});


// wrapper.setState({ buttonStatus: [review], reviews: [review] });
// expect(wrapper.state('renderedReviews')[0].reported).toBe(false);
// wrapper.find('#report').simulate('click');
// expect(wrapper.state('renderedReviews')[0].reported).toBe(true);

// disabled after click
// one disabled one enabled at all times