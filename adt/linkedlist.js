var Node = require('./node');

var LinkedList = function(node) {
  this.head = node;
  this.tail = this.head;
}

LinkedList.prototype.insertHead = function (data) {
  var node = new Node(data);
  // check for head
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  }
  else {
    // insert that node at the head of this
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
  return this;
  // linked list
}

LinkedList.prototype.insertTail = function (data) {
  // create a new node
  var node = new Node(data);
  // find the end of the list
  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  }
  else {
    // nextNode is a temporary palceholder equal to head
    // var nextNode = this.head;
    // while nextNode.next exists, nextNode becomes equal to the next node
    // while(nextNode.next) {
    //   nextNode = nextNode.next;
    // }
    // once nextNode.next is undefined, nextNode becomes node
    // nextNode.next = node;
    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
  }
  return this;
}

module.exports = LinkedList;
