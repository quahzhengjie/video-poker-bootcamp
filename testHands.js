// ############## Test Hands #################
// ###########################################

const FLUSH = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '10', displayName: '10', colour: 'black', rank: 10,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '5', displayName: '5', colour: 'black', rank: 5,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '4', displayName: '4', colour: 'black', rank: 4,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '2', displayName: '2', colour: 'black', rank: 2,
},
];

const FOUR_OF_A_KIND = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: 'Ace', displayName: 'A', colour: 'red', rank: 14,
}, {
  suitSymbol: '♥️', suit: 'hearts', name: 'Ace', displayName: 'A', colour: 'red', rank: 14,
}, {
  suitSymbol: '♠️', suit: 'spades', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '4', displayName: '4', colour: 'black', rank: 4,
},
];

const ROYAL_FLUSH = [{
  suitSymbol: '♠️', suit: 'spades', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♠️', suit: 'spades', name: 'King', displayName: 'K', colour: 'black', rank: 13,
}, {
  suitSymbol: '♠️', suit: 'spades', name: 'Queen', displayName: 'Q', colour: 'black', rank: 12,
}, {
  suitSymbol: '♠️', suit: 'spades', name: 'Jack', displayName: 'J', colour: 'black', rank: 11,
}, {
  suitSymbol: '♠️', suit: 'spades', name: '10', displayName: '10', colour: 'black', rank: 10,
},
];

const STRAIGHT_FLUSH = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'King', displayName: 'K', colour: 'black', rank: 13,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: 'Queen', displayName: 'Q', colour: 'black', rank: 12,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: 'Jack', displayName: 'J', colour: 'black', rank: 11,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '10', displayName: '10', colour: 'black', rank: 10,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '9', displayName: '9', colour: 'black', rank: 9,
},
];

const FULL_HOUSE = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: 'Ace', displayName: 'A', colour: 'red', rank: 14,
}, {
  suitSymbol: '♥️', suit: 'hearts', name: 'Ace', displayName: 'A', colour: 'red', rank: 14,
}, {
  suitSymbol: '♠️', suit: 'spades', name: '4', displayName: '4', colour: 'black', rank: 4,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '4', displayName: '4', colour: 'black', rank: 4,
},
];

const STRAIGHT_BIG = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '10', displayName: '10', colour: 'black', rank: 10,
}, {
  suitSymbol: '♠️', suit: 'spades', name: 'Jack', displayName: 'J', colour: 'black', rank: 11,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: 'Queen', displayName: 'Q', colour: 'black', rank: 12,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: 'King', displayName: 'K', colour: 'red', rank: 13,
},
];

const STRAIGHT_SMALL = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: '2', displayName: '2', colour: 'red', rank: 2,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '3', displayName: '3', colour: 'black', rank: 3,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: '4', displayName: '4', colour: 'red', rank: 4,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '5', displayName: '5', colour: 'black', rank: 5,
}];

const STRAIGHT = [{
  suitSymbol: '♦️', suit: 'diamonds', name: '2', displayName: '2', colour: 'red', rank: 2,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '3', displayName: '3', colour: 'black', rank: 3,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: '4', displayName: '4', colour: 'red', rank: 4,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '5', displayName: '5', colour: 'black', rank: 5,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '6', displayName: '6', colour: 'black', rank: 6,
}];

const THREE_OF_A_KIND = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: 'Ace', displayName: 'A', colour: 'red', rank: 14,
}, {
  suitSymbol: '♥️', suit: 'hearts', name: 'Ace', displayName: 'A', colour: 'red', rank: 14,
}, {
  suitSymbol: '♠️', suit: 'spades', name: 'Jack', displayName: 'J', colour: 'black', rank: 11,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '4', displayName: '4', colour: 'black', rank: 4,
},
];

const TWO_PAIR = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: 'Ace', displayName: 'A', colour: 'red', rank: 14,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: 'Jack', displayName: 'J', colour: 'black', rank: 11,
}, {
  suitSymbol: '♠️', suit: 'spades', name: 'Jack', displayName: 'J', colour: 'black', rank: 11,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '4', displayName: '4', colour: 'black', rank: 4,
},
];

const ONE_PAIR = [{
  suitSymbol: '♣️', suit: 'clubs', name: 'Ace', displayName: 'A', colour: 'black', rank: 14,
}, {
  suitSymbol: '♦️', suit: 'diamonds', name: 'Ace', displayName: 'A', colour: 'red', rank: 14,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '5', displayName: '5', colour: 'black', rank: 5,
}, {
  suitSymbol: '♠️', suit: 'spades', name: 'Jack', displayName: 'J', colour: 'black', rank: 11,
}, {
  suitSymbol: '♣️', suit: 'clubs', name: '4', displayName: '4', colour: 'black', rank: 4,
},
];
