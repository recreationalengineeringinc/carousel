import React from 'react';

const Card = (props) => (
  <div>

    <div>
      <a>
        <div>
          <img src={props.card.imageUrl} alt={props.card.imageDescription} />
        </div>
      </a>
    </div>

    <a>
      <h3>
        <div>{props.card.brand}</div>
        <span>{props.card.name}</span>
      </h3>
    </a>

    <div>
      <div>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <span>
          <span>{`(${props.card.numberOfRatings})`}</span>
        </span>
        <span></span>
      </div>
    </div>

    <div>
      <div>
        <span>{`$${props.card.price}`}</span>
      </div>
    </div>

  </div>
);

export default Card;


// {
//   `$${item.price}`
// }

// CARD TEMPLATE
// <div>
// {
// props.page.items.map((item, index) => (
//   // image
//   <img src={item.imageUrl} alt={item.imageDescription} />
//   <p>
//     // {brand} <br />
//     // {name}
//   </p>
//   <ul>
//     <li className="stars">
//       {
//       // number of ratings
//       }
//       <span>stars</span>
//     </li>
//   </ul>
//   <div>
//     {
//       //price
//     }
// //   </div>
// ))
// }
// <div>This will be the Card</div>
// </div>


// TEMPLATE THAT RECEIVES AN ARRAY OF CARD OBJECTS AND MAPS OVER THEM
// const Card = (props) => (

//   <ul className="card-set">{


//   props.page.map((item, index) => (

//     <li className="card" key={index}>
//       <div>

//         <div>
//           <a>
//             <div>
//               <img src={item.imageUrl} alt={item.imageDescription} />
//             </div>
//           </a>
//         </div>

//         <a>
//           <h3>
//             <div>{item.brand}</div>
//             <span>{item.name}</span>
//           </h3>
//         </a>

//         <div>
//           <div>
//             <div>
//               <span>1</span>
//               <span>2</span>
//               <span>3</span>
//               <span>4</span>
//               <span>5</span>
//             </div>
//             <span>
//               <span>{`(${item.numberOfRatings})`}</span>
//             </span>
//             <span></span>
//           </div>
//         </div>

//         <div>
//           <div>
//             <span>{`$${item.price}`}</span>
//           </div>
//         </div>

//       </div>
//     </li>
//   ))

//   }</ul>


// );