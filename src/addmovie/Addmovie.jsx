import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

const Addmovie = props => {
  console.log(props);
  let arr = [];
  for (let i = 0; i < 5; i++) {
    if (i < props.star)
      arr.push(
        <span onClick={() => props.changeCount(i + 1)}>
          <i class="fas fa-star"></i>
        </span>
      );
    else
      arr.push(
        <span onClick={() => props.changeCount(i + 1)}>
          <i class="far fa-star"></i>
        </span>
      );
  }
  return <div>{arr}</div>;
};
export default Addmovie;
