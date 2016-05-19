/*

  A tree can be represented by a single root node that has child nodes,
  which in turn have child nodes etc...

       A
      /\
    B   C
   /\
  D E

  You can represent trees with objects and arrays in various different ways.
  One way looks like this:

  {
    name: 'a',
    children: [
      {
        name: 'b',
        children: [
          {
            name: 'd',
            children: []
          },
          {
            name: 'e',
            children: []
          },
        ]
      },
      {
        name: 'c',
        children: []
      }
    ]
  }

  Your job is to turn an object with the format above into a tree of nodes.

  Imlement this depth-first, using recursion.

*/

var Node = require('./node');

var objectToNode = function(object) {
  var node = new Node(object.name);
  for (var i=0; i<object.children.length; i++) {
    node.addChild(objectToNode(object.children[i]));
  }
  return node;
};

module.exports = objectToNode;
