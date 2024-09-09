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
    let dummy = {
        next: null
    };

    const first = dummy

    let [head1, head2] = [list1, list2]

    while (head1 && head2) {
        if (head1.val < head2.val) {
            dummy.next = head1
            head1 = head1.next
        } else {
            dummy.next = head2
            head2 = head2.next
        }

        dummy = dummy.next
    }

    while (head1) {
        dummy.next = head1
        head1 = head1.next
        dummy = dummy.next
    }

    while (head2) {
        dummy.next = head2
        head2 = head2.next
        dummy = dummy.next
    }

    return first.next


};