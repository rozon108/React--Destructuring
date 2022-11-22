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
    </tr>
    <tr>
      <td>{tesla.model}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
