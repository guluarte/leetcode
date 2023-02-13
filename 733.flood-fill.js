/*
 * @lc app=leetcode id=733 lang=javascript
 *
 * [733] Flood Fill
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  if (!image || image.length < 1) return image
  // bst
  // use a queue
  // add neighboors same n to queue

  const q = [[sr, sc]]

  const originalColor = image[sr][sc]

  const processed = {}

  while (q.length > 0) {
    const rc = q.shift()
    image[rc[0]][rc[1]] = color
    processed[`${rc[0]}-${rc[1]}`] = 1
    // add top, r, b, l to q
    let n = [
      [rc[0] - 1, rc[1]],
      [rc[0] + 1, rc[1]],
      [rc[0], rc[1] - 1],
      [rc[0], rc[1] + 1]
    ]

    for (let i = 0; i < n.length; i++) {
      const e = n[i]
      if (
        image[e[0]] &&
        !processed[`${e[0]}-${e[1]}`] &&
        // image[e[0]][e[1]] &&
        image[e[0]][e[1]] === originalColor
      ) {
        q.push(e)
      }
    }
  }

  return image
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = floodFill
// @after-stub-for-debug-end
