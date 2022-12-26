// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexit

var searchInsert = function (nums, target) {
  let right = nums.length;
  let left = 0;
  let mid;
  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    console.log(mid);
    if (target == nums[mid] || left == right) {
      return mid;
    } else if (nums[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
      //   mid++;
    }
  }
  console.log(mid, target);
  return mid;
};
console.assert(searchInsert([1, 3, 5, 6], 5) == 2);
console.assert(searchInsert([1, 3, 5, 6], 2) == 1);
console.assert(searchInsert([1, 3, 5, 6], 7) == 4);
console.assert(searchInsert([1, 3], 2) == 1);
