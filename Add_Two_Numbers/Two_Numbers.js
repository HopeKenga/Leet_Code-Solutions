//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

//You may assume the two numbers do not contain any leading zero, except the number 0 itself

const addTwoNumbers = (l1, l2) => {
    let rootNode = new listNode(0);
    let node = rootNode;
    let sum = 0;
    let carry = 0;

    while (l1 || l2 ||sum > 0) {

        if (l1) {
            sum += l1.val;
            l1 =l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum > 9) {
            carry = 1;
            sum = sum - 10;
        }
        node.next = new listNode(sum);
        node = node.next;

        sum = carry;
        carry = 0;

}
return rootNode.next
}