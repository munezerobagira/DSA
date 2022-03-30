// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let m = Math.floor((left + right) / 2);
    if (nums[m] === target) {
      return m;
    }
    if (nums[m] > target) {
      right = m - 1;
    } else {
      left = m + 1;
    }
  }
  return -1;
};
console.assert(search([-1, 0, 3, 5, 9, 12], 9) == 4);
console.assert(search([5], 5) == 0);
