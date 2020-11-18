import React from 'react';

const Carousel = (props) => (
  <div>
    <div>This will be the carousel</div>
    {
      props.page.items.map((item, index) => (
        <div>{item.imageUrl}</div>
      ))
    }
  </div>
);

export default Carousel;