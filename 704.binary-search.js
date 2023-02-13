/*
 * @lc app=leetcode id=704 lang=javascript
 *
 * [704] Binary Search
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // find middle
  // if t > m discard left
  // if t < m discard right

  if (!nums || nums.length < 1) return -1

  let start = 0
  let end = nums.length

  while (start !== end) {
    let middle = start + Math.floor((end - start) / 2)

    let element = nums[middle]
    if (element === target) {
      return middle
    }
    if (target > element) {
      start = middle + 1
    } else {
      end = middle
    }
  }

  return -1
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = search
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = search
// @after-stub-for-debug-end

// @after-stub-for-debug-begin
module.exports = search;
// @after-stub-for-debug-end