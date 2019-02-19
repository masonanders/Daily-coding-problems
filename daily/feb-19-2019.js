// Given an array of time intervals (start, end) for classroom lectures
// (possibly overlapping), find the minimum number of rooms required.

// For example, given [[30, 75], [0, 50], [60, 150]], you should return 2.
/* 
{
  0: 50,
  30: 70,
  60: 150
}

// start counter at 0
// add nodes to a min heap with the value as the end time
// once timer reaches end time of min node, delete it
// record and return largest heap size
*/

function howManyRooms(array) {
  // code here
}

// Time: O(?)
// Space: O(?)

module.exports = howManyRooms;
