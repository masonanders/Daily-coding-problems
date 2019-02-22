import { MinHeap } from "../util/heap";

// Implement a job scheduler which takes in a function f and an integer n,
// and calls f after n milliseconds.

// Synchronous
function syncTaskScheduler(func, milliseconds) {
  const then = Date.now() + milliseconds;
  while (Date.now() < then) {}
  return func();
}

// Multiple tasks
class Scheduler {
  constructor() {
    this.tasks = new MinHeap();
  }

  newTask(func, milliseconds) {}
}

// Time: O(N)
// Space: O(1)

module.exports = taskScheduler;
