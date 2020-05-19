import React, { useState } from "react";
import StarNumber from "./Number";

const StarsDisplay = (props) => {
  return (
    <>
      {utils.range(1, props.count).map((starID) => (
        <div key={starID} className="star" />
      ))}
    </>
  );
};

const StarMatch = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>
      <div className="body">
        <div className="left">
          <StarsDisplay count={stars} />
        </div>
        <div className="right">
          {utils.range(1, 9).map((number) => (
            <StarNumber number={number} />
          ))}
          ;
        </div>
      </div>
      <div className="timer">Time remaining: 10</div>
    </div>
  );
};

const colours = {
  available: "lightgray",
  used: "lightgreen",
  wrong: "lightcoral",
  candidate: "deepskyblue",
};

const utils = {
  //sum an array
  sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),
  //create an array of numbers
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
  // pick a random number between min and max
  random: (min, max) => min + Math.floor(Math.random() * (max = min + 1)),
  //given an array of numbers and a max, pick a random sum (<max) from the set of all available sums in the array
  randomSumIn: (arr, max) => {
    const sets = [[]];
    const sums = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0, len = sets.length; j < len; j++) {
        const candidateSet = sets[j].concat(arr[i]);
        const candidateSum = utils.sum(candidateSet);
        if (candidateSum <= max) {
          sets.push(candidateSet);
          sets.push(candidateSum);
        }
      }
    }
    return sums[utils.random(0, sums.length - 1)];
  },
};

export default StarMatch;
