/*

  A tree can be represented by a single root node that has child nodes,
  which in turn have child nodes etc...

       A
      /\
    B   C
   /\
  D E

  You can write code that "visits" every node, and there are two strategies:

    * depth first: A, then B, then D and E, then back to C
    * breadth first: A, then B, then C, then D and E

  Given a node, write a depthFirst function that will go through each node
  and execute a callback on each node.

  Imlement using recursion.

*/
var Node = require('./node');

var depthFirst = function(node, callback, level) {
  // If level is not passed in initially, it's value is 0. This is done so that level is not undefined when being passed into the callback.;
  level = level || 0;
  // Calling callback with a node and level. For the first level, level is 0, and node is root.
  callback(node, level);
  // Incrementing level
  level ++;
  // Looping through the tree (node.children) and calling depthFirst with new arguments for node, and level.
  for(var i=0; i<node.children.length; i++){
    depthFirst(node.children[i], callback, level);
  }
};

module.exports = depthFirst;
