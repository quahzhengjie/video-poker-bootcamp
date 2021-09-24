//Create Cardcontainer

//Global Variables for DOM

//A border to hold the cards.
let cardContainer;
//for the shuffled deck
let deck;
//player hand will always be 5.
const handSize = 5;
//player hand
let playerHand = [];
//store player's cards to exchange
let cardsToExchange = [];
//player starts 100 points
let points = 100;
//container to hold buttons
let playerActionContainer;
const gameInfo = document.createElement("div");
const pointsInfo = document.createElement("div");
const buttonContainer = document.createElement("div");
// const buttonContainer1 = document.createElement('p');
const numberInput = document.createElement("input");
const DealDoneButton = document.createElement("button");
const SwapButton = document.createElement("button");
//Game Modes
const DEAL_CARD_MODE = "Deal Card Mode";
const SWAP_CARD_MODE = "Swap Card Mode";
let currentGameMode = DEAL_CARD_MODE;
//// For controlling button clickability ----------------------------
// only allow player to submit bid points at start of the round
let canSubmitBidPoints = true;
// Only allow player to click on dealButton after submitting bid points and before exchanging cards
let canDealStartingCards = false;
// only allow player to click on card after having dealt cards
let canClickCards = false;
// only allow player to click on exchangeOrHoldCardsButton after having dealt cards
let canExchangeOrHoldCards = false;

//CREATE SHUFFLED DECK
//########## HELPER FUNCTIONS ##########

//[Helper Fn1: CREATING OF CARD DECKS - A-K, + Suits + colours]
//create a shuffled deck array with card objects and return this shuffled deck.
const makeDeck = () => {
  // Initialise an empty deck array, we will be pushing in the cards into this newDeck array.
  const newDeck = [];

  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  const suits = ["hearts", "diamonds", "clubs", "spades"];
  // Loop over the suits array
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    const currentSuit = suits[suitIndex];
    let currentSymbol;
    let currentColour = "red";

    if (currentSuit === "hearts") {
      currentSymbol = "♥️";
    } else if (currentSuit === "diamonds") {
      currentSymbol = "♦️";
    } else if (currentSuit === "clubs") {
      currentSymbol = "♣️";
      currentColour = "black";
    } else if (currentSuit === "spades") {
      currentSymbol = "♠️";
      currentColour = "black";
    }
    // Loop from 1 to 13 to create all cards for a given suit
    // rankCounter starts at 1 and not 0, and ends at 13.
    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // Converts rankCounter to String.
      let cardName = `${rankCounter}`;
      let cardDisplay = `${rankCounter}`;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName === "1") {
        cardName = "ace";
        cardDisplay = "A";
      } else if (cardName === "11") {
        cardName = "jack";
        cardDisplay = "J";
      } else if (cardName === "12") {
        cardName = "queen";
        cardDisplay = "Q";
      } else if (cardName === "13") {
        cardName = "king";
        cardDisplay = "K";
      }

      //Single Card Object.
      const cardInfo = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        suitSymbol: currentSymbol,
        displayName: cardDisplay,
        colour: currentColour,
      };
      // Add the new card to the deck
      newDeck.push(cardInfo);
    }
  }
  // Return the completed card deck
  return newDeck;
};

//random index generator.
// Get a random index ranging from 0 (inclusive) to max (exclusive).
const getRandomIndex = (max) => Math.floor(Math.random() * max);

//[Helper Fn2: SHUFFLER]
//Helper function to Shuffle an array of cards and return it

const shuffleCards = (cards) => {
  // Loop over the card deck array
  for (let currentIndex = 0; currentIndex < cards.length; currentIndex += 1) {
    // Select a random index in the deck
    const randomIndex = getRandomIndex(cards.length);
    //Get the current card in the current loop
    const currentCard = cards[currentIndex];
    //Get a random card
    const randomCard = cards[randomIndex];
    // Swap positions of randomCard and currentCard in the deck
    cards[currentIndex] = randomCard;
    cards[randomIndex] = currentCard;
  }
  // Return the shuffled deck
  return cards;
};

//Shuffled Deck = parsing deck through shuffler
deck = shuffleCards(makeDeck());
console.log(deck);

//Card Element to be INSIDE the card Container.
const createCardElement = (card) => {
  //SUIT
  const SuitEL = document.createElement("div");
  // SuitEL.classList.add(card.colour,'suit');
  SuitEL.innerHTML = card.suitSymbol;
  SuitEL.style.color = card.colour;
  //NAME
  const NameEL = document.createElement("div");
  //  NameEL.classList.add(cardInfo.displayName, cardInfo.colour);
  NameEL.innerHTML = card.displayName;
  NameEL.style.color = card.colour;

  //The Card Element.
  const cardEl = document.createElement("div");
  cardEl.classList.add("card");

  //Appending the NAME and SUIT to the CARD Element.
  cardEl.appendChild(SuitEL);
  cardEl.appendChild(NameEL);

  return cardEl;
};

// deal cards to player at start of the game according to handSize
const dealStartingCards = (card) => {
  console.log("dealbuttonclickevent is");
  //Remove cards from previous round
  let playerhand = [];

  for (let i = 0; i < handSize; i += 1) {
    console.log("for loop is running");
    //push card into hand array
    const card = deck.pop();
    playerhand.push(card);
    cardContainer.appendChild(createCardElement(card));
    console.log(playerhand);
    const cardToExchange = playerhand[i];
    console.log(cardToExchange);
  }
};

//a. Start game/Deal Button. Deck ->Push into hand array, 5 cards (handsize=5)
//Deal Button EVENT.
const dealButtonClickEvent = () => {
  console.log("dealbuttonclickevent is");
  //Remove cards from previous round
  let playerhand = [];

  for (let i = 0; i < handSize; i += 1) {
    console.log("for loop is running");
    //push card into hand array
    const card = deck.pop();
    playerhand.push(card);
    cardContainer.appendChild(createCardElement(card));
    console.log(playerhand);
    const cardToExchange = playerhand[i];
    console.log(cardToExchange);
  }
};

//Exchange of cards.
//Fn: a. select the card to exchange or unselect it

const squareClick = (cardEl, i) => {
  if (currentGameMode === DEAL_CARD_MODE) {
    gameInfo.innerHTML = "Deal your cards first";
  } else if (currentGameMode === SWAP_CARD_MODE) {
    const clickedCard = playerHand[i];
    if (playerHand[i] === 0) {
      playerHand[i] = 1;
      cardEl.classList.add("card-border");
    } else if (playerHand[i] === 1) {
      playerHand[i] = 0;
      cardEl.classList.remove("card-border");
    }
    return clickedCard;
  }
};
const selectOrUnselectCardToExchange = (cardEl, cardToExchange) => {
  // when player clicks this card and it has not been selected before,
  // store it in an array of cards that will be exchanged
  // but if card is selected before,
  // remove it from the array of cards that will be exchanged.
  let isCardPresent = false; // false if card has not been selected before
  if (cardsToExchange.length > 0) {
    // only check if there are cards in array
    for (let j = 0; j < cardsToExchange.length; j += 1) {
      if (cardToExchange === cardsToExchange[j]) {
        isCardPresent = true;
        cardsToExchange.splice(j, 1); // remove the card from array
        j -= 1; // account for the decrease in array length
        // remove the card border display to let player know card is un-selected
        cardEl.classList.remove("card-border");
      }
    }
  }
  if (isCardPresent === false) {
    cardsToExchange.push(cardToExchange); // store the card
    // display the card border to let player know card is selected
    cardEl.classList.add("card-border");
  }
};

// b. Exchange cards
const exchangeCards = () => {
  // exchange the selected cards in playerHand
  for (let i = 0; i < playerHand.length; i += 1) {
    for (let j = 0; j < cardsToExchange.length; j += 1) {
      if (
        cardsToExchange[j].rank === playerHand[i].rank &&
        cardsToExchange[j].suit === playerHand[i].suit
      ) {
        playerHand.splice(i, 1, deck.pop());
      }
    }
  }
  // empty cardsToExchange array since we do not need the cards inside anymore
  cardsToExchange = [];

  // clear previous display of player's hand
  playerHandContainer.innerHTML = "";

  // make the player's cards' display and display them
  for (let i = 0; i < playerHand.length; i += 1) {
    const cardEl = makeCardElement(playerHand[i]);
    playerHandContainer.appendChild(cardEl);
  }
};

// For calculating player hand score -------------------------------
// reorder player's cards from highest to lowest rank
const reorderCards = () => {
  /** for each position starting from the 0th index
   * check cards in positions further down the array for higher ranks
   * and swap the cards in those positions */
  let j = 1;
  for (let i = 0; i < playerHand.length - 1; i += 1) {
    for (let k = j; k < playerHand.length; k += 1) {
      if (playerHand[k].rank > playerHand[i].rank) {
        const lowerRankCard = playerHand[i];
        const higherRankCard = playerHand[k];
        playerHand[i] = higherRankCard;
        playerHand[k] = lowerRankCard;
      }
    }
    j += 1;
  }
};

// store similar ranks together and used to check for winning conditions
const groupPlayerCardsByRank = () => {
  // empty rankedHand of previous round
  rankedHand = [[]];

  // logic
  rankedHand[0].push(playerHand[0]);
  let rankRow = 0;
  for (let i = 1; i < playerHand.length; i += 1) {
    // store the current card in the row array containing cards of the same rank
    if (playerHand[i].rank === playerHand[i - 1].rank) {
      rankedHand[rankRow].push(playerHand[i]);
    } else {
      // store the current card in a new row array for the next rank
      rankedHand.push([]);
      rankRow += 1;
      rankedHand[rankRow].push(playerHand[i]);
    }
  }
};
// find number of pairs/3 of a kind/4 of a kind
const findNumOfSimilarCards = () => {
  // empty previous round's records
  numOfPairs = 0;
  numOf3OfAKind = 0;
  numOf4OfAKind = 0;

  // logic
  for (let i = 0; i < rankedHand.length; i += 1) {
    if (rankedHand[i].length === 4) {
      numOf4OfAKind += 1;
    } else if (rankedHand[i].length === 3) {
      numOf3OfAKind += 1;
    } else if (rankedHand[i].length === 2) {
      numOfPairs += 1;
    }
  }
};
// returns true if there is a straight in the player's hand
const isStraight = () => {
  // if checkStraight is true, there is a straight in the player's hand
  let checkStraight = false;
  // number of times the difference between playerHand[i].rank and playerHand[i+1].rank is one
  let timesDifferenceIsMinusOne = 0;

  // check if player has a straight from 10 to ace
  for (let i = 0; i < playerHand.length - 2; i += 1) {
    if (playerHand[i].rank - playerHand[i + 1].rank === 1) {
      timesDifferenceIsMinusOne += 1;
    }
  }
  if (
    timesDifferenceIsMinusOne === 3 &&
    playerHand[4].rank === 1 &&
    playerHand[0].rank === 13
  ) {
    checkStraight = true;
  }

  // check if player has a straight other than from 10 to ace
  timesDifferenceIsMinusOne = 0;
  for (let i = 0; i < playerHand.length - 1; i += 1) {
    if (playerHand[i].rank - playerHand[i + 1].rank === 1) {
      timesDifferenceIsMinusOne += 1;
    }
  }
  if (timesDifferenceIsMinusOne === 4) {
    checkStraight = true;
  }

  return checkStraight;
};
// returns true if there is a flush in the player's hand
const isFlush = () => {
  // if checkFlush is true, there is a Flush in the player's hand
  let checkFlush = false;

  // logic
  if (
    playerHand[0].suit === playerHand[1].suit &&
    playerHand[1].suit === playerHand[2].suit &&
    playerHand[2].suit === playerHand[3].suit &&
    playerHand[3].suit === playerHand[4].suit
  ) {
    checkFlush = true;
  }

  return checkFlush;
};
// return true if there is a royal flush (straight from 10 to ace and cards have same suit)
const isRoyalFlush = () => {
  // if check10ToAce is true, there is a straight from 10 to Ace in the player's hand
  let check10ToAce = false;
  // number of times the difference between playerHand[i].rank and playerHand[i+1].rank is one
  let timesDifferenceIsMinusOne = 0;
  // if there is a flush, check for straight from 10 to ace
  if (isFlush() === true) {
    // check if player has a straight from 10 to ace
    for (let i = 0; i < playerHand.length - 2; i += 1) {
      if (playerHand[i].rank - playerHand[i + 1].rank === 1) {
        timesDifferenceIsMinusOne += 1;
      }
    }
    if (
      timesDifferenceIsMinusOne === 3 &&
      playerHand[4].rank === 1 &&
      playerHand[0].rank === 13
    ) {
      check10ToAce = true;
    }
  }

  return check10ToAce;
};
// returns true if there is a full house in the player's hand
const isFullHouse = () => {
  let checkFullHouse = false;
  if (numOf3OfAKind === 1 && numOfPairs === 1) {
    checkFullHouse = true;
  }
  return checkFullHouse;
};
// returns true if there is a card that is Jack or higher in the player's hand
const isJackOrHigher = () => {
  let checkJackOrHigher = false;
  // check every card in player's hand for jack,queen,king or ace
  for (let i = 0; i < playerHand.length; i += 1) {
    if (playerHand[i].rank > 10 || playerHand[i].rank === 1) {
      checkJackOrHigher = true;
    }
  }
  return checkJackOrHigher;
};
// returns number of points based on player's hand
const calcHandScore = () => {
  if (isRoyalFlush() === true) {
    // royal flush
    handScore = 10;
  } else if (isStraight() === true && isFlush() === true) {
    // straight flush
    handScore = 9;
  } else if (numOf4OfAKind === 1) {
    // 4 of a kind
    handScore = 8;
  } else if (isFullHouse() === true) {
    // full house
    handScore = 7;
  } else if (isFlush() === true) {
    // flush
    handScore = 6;
  } else if (isStraight() === true) {
    // straight
    handScore = 5;
  } else if (numOf3OfAKind === 1) {
    // 3 of a kind
    handScore = 4;
  } else if (numOfPairs === 2) {
    // 2 pairs
    handScore = 3;
  } else if (numOfPairs === 1) {
    // 1 pair
    handScore = 2;
  } else if (isJackOrHigher() === true) {
    handScore = 1;
  } else {
    handScore = 0;
  }
};

// returns points won for the round
const calcPointsWon = () => playerBidPoints * handScore;
// add points to player's total points based on bid points and hand score
const addPoints = () => {
  playerTotalPoints += calcPointsWon();
};

//INIT GAME
const initGame = () => {
  //make and store cards into a shuffled deck

  deck = shuffleCards(makeDeck());
  //##### Starting Board#########
  //Starting Instructions are in HTML.

  //(Add this to DEAL CARDS)
  DealDoneButton.innerText = "DEAL/DONE";
  //(Add this to SWAP CARDS)
  SwapButton.innerText = "SWAP";

  //Creating Player Action Container.
  playerActionContainer = document.createElement("div");
  playerActionContainer.classList.add("info-button-container");
  document.body.appendChild(playerActionContainer);
  //Adding Gameinfo
  gameInfo.innerText = "Welcome! Click on DEAL to start";
  playerActionContainer.appendChild(gameInfo);
  //points
  pointsInfo.innerText = `${points} points`;
  playerActionContainer.appendChild(pointsInfo);
  //Add Button
  playerActionContainer.appendChild(DealDoneButton);
  playerActionContainer.appendChild(SwapButton);

  //Card-Container like a board
  cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  document.body.appendChild(cardContainer);

  //End of making board.

  //2 #### Adding Event Listeners.
  DealDoneButton.addEventListener("click", () => {
    //ADD PLAYER MODE TO DISABLE
    console.log("dealbuttonclickevent is working");
    //Remove cards from previous round
    let playerhand = [];

    for (let i = 0; i < handSize; i += 1) {
      console.log("for loop is running");
      //push card into hand array
      const card = deck.pop();
      playerhand.push(card);
      cardContainer.appendChild(createCardElement(card));
      console.log(playerhand);
      // store the current card in case the player wants to exchange it later
    }
  });
};

//3 #### Adding Gameflow Fn into the game
initGame();
