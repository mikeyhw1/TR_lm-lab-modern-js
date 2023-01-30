// Instructions can be found in rest_parameters.md

const add = (...nums) => {
  let sum = 0
  for (const item of nums) { sum += item };
  return sum;
}

// add(1, 2, 3, 4, 5);

module.exports = { add };
