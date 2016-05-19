/*

  A tree can be represented by a single root node that has child nodes,
  which in turn have child nodes etc...

       A
      /\
    B   C
   /\
  D E

  You can represent trees with just arrays in various different ways.
  One way looks like this:

  [
    'a',
    [
      [
        'b',
        [
          [
           'd',
           []
         ],
          [
           'e',
           []
          ]
        ]
      ],
      [
        'c',
        []
      ]
    ]
  ]

  Your job is to turn an array with the format above into a tree of nodes.

  Imlement this depth-first, using recursion.

*/

var Node = require('./node');

var arrayToNode = function(input) {
  var outputNode = new Node(input[0]);
  for (var i=0; i<input[1].length; i++) {
    outputNode.addChild(arrayToNode(input[1][i]));
  }
  return outputNode;
};

module.exports = arrayToNode;
