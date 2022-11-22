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
