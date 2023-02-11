/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // check base case
  // if the strings are different in len
  // then is not an anagram
  if (s.length !== t.length) return false

  const sArray = s.split('')
  const dict = []

  // initialize a dict with the count for every letter
  for (let i = 0; i < sArray.length; i++) {
    dict[sArray[i]] = dict[sArray[i]] || 0
    dict[sArray[i]]++
  }

  // every loop just check if the letter is in the dict
  // and if the count is positive
  for (let i = 0; i < t.length; i++) {
    if (!dict[t[i]]) {
      return false
    }
    dict[t[i]]--
  }

  return true
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isAnagram
// @after-stub-for-debug-end
