import React from "react";

function timeCalculator(time) {
  const houres = time.slice(0, 2);
  const min = time.slice(3, 5);
  let newHoures = "";
  if (+houres + 1 >= 10) newHoures = `${+houres + 1}:${min}`;
  else {
    newHoures = `0${+houres + 1}:${min}`;
  }

  return `${time}-${newHoures}`;
}

export default timeCalculator;
