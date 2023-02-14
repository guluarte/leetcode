/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

  const path1 = [root]
  const path2 = [root]

  findNode(root, p, path1)
  findNode(root, q, path2)

  const longest = Math.max(path1.length, path2.length)

  let prev = 0

  for (let i = 0; i < longest; i++) {
    if (!path1[i] || !path2[i] || path1[i].val !== path2[i].val) {
      return prev
    }

    prev = path1[i]
  }

  return prev
}

const findNode = (node, p, path) => {
  if (!node) {
    return false
  }

  path.push(node)

  if (node.val === p.val) {
    return true
  }

  if (findNode(node.left, p, path) || findNode(node.right, p, path)) {
    return true
  }

  path.pop()
  return false
}

// @lc code=end

// @after-stub-for-debug-begin
module.exports = lowestCommonAncestor
// @after-stub-for-debug-end
