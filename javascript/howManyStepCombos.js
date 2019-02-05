// Description here

function howManyStepCombos(arrOfSteps, numSteps) {
  if (numSteps === 1) return [[1]];
  const stepCombos = new Set();
  arrOfSteps.forEach(step => {
    if (step > numSteps) return;
    if (step === numSteps) stepCombos.add(JSON.stringify([step]));
    const prevStepCombos = howManyStepCombos(arrOfSteps, numSteps - step);
    prevStepCombos.forEach(combo => {
      for (let i = 0; i <= combo.length; i++) {
        const comboCopy = combo.slice();
        comboCopy.splice(i, 0, step);
        stepCombos.add(JSON.stringify(comboCopy));
      }
    });
  });
  return Array.from(stepCombos).map(combo => JSON.parse(combo));
}

// Time: O(?)
// Space: O(?)

module.exports = howManyStepCombos;
