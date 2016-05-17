var Node = require('./node');
var LinkedList = require('./linkedlist');

// var node1 = new Node(10);
// var node2 = new Node(20);
// var node3 = new Node(30);

var list = new LinkedList();

list.insertHead(9)
    .insertHead(8)
    .insertTail(10)
    .insertTail(11)
    .insertTail(12);

console.log(list.head.data); //8
console.log(list.head.next.data); //9
console.log(list.head.next.next.next.data); //11
