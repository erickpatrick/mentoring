/**
 * Function that calculates how many checks we do until we get to the value of 1
 *
 * @param input
 * @param cycleSize
 * @returns Number
 */
const calculateCycleSize = (input, cycleSize) => {
  // restriction: it stops at 1, so numbers smaller than this are not allowed
  if (input < 1) {
    throw new Error('No number smaller than 1 is allowed')
  }

  // restriction: it can't be larger than 1_000_000
  if (input > 1000000) {
    throw new Error('No number larger than 1_000_000 is allowed')
  }

  // if the number is 1 we return the passed cycleSize and increase in 1 as
  // this is also a cycle check
  if (input === 1) {
   return cycleSize + 1
  }

  // if even, divide input by 2 and increase cycle
  if (input % 2 === 0) {
    return calculateCycleSize(input / 2, cycleSize + 1)
  }

  // if it's not even (i.e., it will be odd), multiply input by 3, sum the
  // resulting number to 1; and increase cycle size
  return calculateCycleSize((input * 3) + 1, cycleSize + 1)
}

// example inputs from exercise
const inputs = [
  [1, 10],
  [100, 200],
  [201, 210],
  [900, 1000]
]

// to avoid calculating the size of example inputs every time we start the loop
// again, we cache it outside the for declaration
const sizeOfInputs = inputs.length

// we cycle over each pair from inputs
for (let i = 0; i < sizeOfInputs; i += 1) {
  // we'll save all cycle sizes here
  let allCyclesSizes = []

  // then, from the first value of input (j = inputs[i][0]) until the last and
  // including it (j <= inputs[i][1])
  for (let j = inputs[i][0]; j <= inputs[i][1]; j += 1) {
    // calculate the cycle size for that number and insert into array
    // allCyclesSizes
    allCyclesSizes.push(calculateCycleSize(j, 0))
  }

  // get the highest numbers from allCycleSizes (Math.max(...allCycleSizes)
  // and insert into array inputs array for the corresponding pair
  // (inputs[i])
  inputs[i].push(Math.max(...allCyclesSizes))
}

// show results
console.log(inputs)