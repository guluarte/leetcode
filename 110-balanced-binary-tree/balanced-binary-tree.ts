/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const depth = (root: TreeNode): [boolean, number] => {
    if (!root) {
        return [true, 0]
    }

    const left = depth(root.left)
    const right = depth(root.right)

    return [left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1, Math.max(left[1], right[1]) + 1]
}

function isBalanced(root: TreeNode | null): boolean {
    return !!depth(root)[0]
};

