//Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

//k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

//You may not alter the values in the list's nodes, only nodes themselves may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var depthCheck = function(head) {
     //checks the depth of the list
     let depth = 0 ;
     while(head) {
         head = head.next;
         depth++;
     }
     return depth;
 }
 var reverseKGroup = function (head, k) {
     let originalK = k;

     let curr = head;
     //if our current depth matches or is greater than our k-group size, we can make at least 1 more reversal
     if(depthCheck(curr)>=k) {
         while (k>1 && curr.next) {
             let temp = curr.next;
             curr.next = curr.next.next;
             temp.next = head;
             head = temp;
             k--;
         }
         //attach the tail recursively, will either reverse or be too short and return as is
         curr.next = reverseKGroup(curr.next, originalK)
     }
    return head;
 }