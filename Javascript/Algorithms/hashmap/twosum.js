// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function (nums, target) {
  let object = {},
    i,
    complement;
  for (i = 0; i < nums.length; i++) {
    object[nums[i]] = i;
  }
  for (i = 0; i < nums.length; i++) {
    complement = target - nums[i];
    if (object[complement] && object[complement] != i)
      return [i, object[complement]];
  }
};
console.assert(twoSum([2, 7, 11, 15], 9).join() == [0, 1].join());
console.assert(twoSum([3, 2, 4], 6).join() == [1, 2].join());
