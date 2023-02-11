/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null

  const right = root.right
  const left = root.left

  root.left = invertTree(right)
  root.right = invertTree(left)

  
  return root
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = invertTree
// @after-stub-for-debug-end
