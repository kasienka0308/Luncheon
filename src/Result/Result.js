import React from "react";

// durstenfeld shuffle
function shuffleArray(array) {
  const randomOrder = [...array];
  for (let i = randomOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomOrder[i], randomOrder[j]] = [randomOrder[j], randomOrder[i]];
  }
  return randomOrder;
}

function Result() {
  // mock fake people's names for the shifts
  const shiftA = shuffleArray(["Scarlet", "Emma", "Michal"]);
  const shiftB = shuffleArray(["Ella", "Bartek", "Avery"]);
  const shiftC = shuffleArray(["Zoey", "Wyatt", "Jack"]);
  // adding all the arrays together keeping A, B, C preference
  const lunchOrder = shiftA.concat(shiftB).concat(shiftC);

  return (
    <ol>
      {lunchOrder.map(name => {
        return <li>{name}</li>;
      })}
    </ol>
  );
}

export default Result;
