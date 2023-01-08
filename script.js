// find the perimeter of rectangle given length and width
function findPerimeter(length, width) {
  return 2 * (length + width);
}

// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(twoPointers, threePointers) {
  let a = 2 * twoPointers;
  let b = 3 * threePointers;

  return a + b;
}

// Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
  return "something" + " " + a;
}
