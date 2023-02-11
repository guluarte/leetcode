/* eslint-disable no-undef */
/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // first decide who goes first?
  // start with a fake node, and keep a pointer to it?
  // then take from one list -> repeat

  let first = new ListNode()

  let sorted = new ListNode()

  first = sorted

  let l1pointer = list1
  let l2pointer = list2

  if (!l1pointer) return l2pointer
  if (!l2pointer) return l1pointer

  while (l1pointer || l2pointer) {
    while (l1pointer && (!l2pointer || l1pointer.val <= l2pointer.val)) {
      // move l1pointer
      sorted.next = l1pointer
      sorted = sorted.next
      l1pointer = l1pointer.next
    }

    while (l2pointer && (!l1pointer || l2pointer.val < l1pointer.val)) {
      sorted.next = l2pointer
      sorted = sorted.next
      l2pointer = l2pointer.next
    }
  }

  return first.next
}
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists
// @after-stub-for-debug-end
