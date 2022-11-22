// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

let honda, tesla;

[honda, tesla] = [cars[0], cars[1]];

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tbody>
      <tr>
        <td>{tesla.model}</td>
        <td>{tesla.speedStats.topSpeed}</td>
        <td>{tesla.coloursByPopularity[0]}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{honda.speedStats.topSpeed}</td>
        <td>{honda.coloursByPopularity[0]}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);

//Another Way
// Looks clean and very interesting way of declaring const

// const [honda, tesla] = cars;

// const {
//   speedStats: { topSpeed: hondaTopSpeed }
// } = honda;
// const {
//   speedStats: { topSpeed: teslaTopSpeed }
// } = tesla;

// const {
//   coloursByPopularity: [hondaTopColour]
// } = honda;
// const {
//   coloursByPopularity: [teslaTopColour]
// } = tesla;

// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//       <th>Top Colour</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
