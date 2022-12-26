// You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

const ourApiVersion = {};
// let option=process.arg
let firstBadApi = parseInt(Math.random() * 10);
for (let i = 1; i <= 10; i++) {
  if (i >= firstBadApi) {
    ourApiVersion[i] = true;
  } else {
    ourApiVersion[i] = false;
  }
}

console.log(ourApiVersion);
function isBadVersion(n) {
  return ourApiVersion[n];
}

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;
    let m;
    while (left <= right) {
      m = Math.floor((left + right) / 2);
      let result = isBadVersion(m);
      if (result) {
        if (right == left) return m;
        right = m;
      } else {
        left = m + 1;
        // m = -1;
      }
    }

    return m;
  };
};

console.log(solution(isBadVersion)(10));
