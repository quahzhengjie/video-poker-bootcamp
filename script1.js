// Steps of Game
// Video Poker is single-player Poker where we try to optimise our score by getting the best possible hands. The gameplay is as follows.

//Create fn: USER STARTS WITH 100 points
// The user starts with 100 points.

//Create Button Click Deal - Draw random 5 CardDeck
// When they click the "Deal" button the computer deals a hand of 5 CardDeck. 

//input random number of CardDeck that he wants to replace with new random CardDeck
//The user can choose any number of their CardDeck to replace with new, random CardDeck.

//Calculate Hand and check win
// After the user finishes replacing CardDeck, the game assigns points based on the resulting hand. See rankings of Poker hands here.

//(Fn Check Win) //Rules
// 1. Five of a kind - Five of a kind is a hand that contains five CardDeck of one rank, such as 3♥ 3♦ 3♣ 3♠ 3 
// 2. Straight flush - A straight flush is a hand that contains five CardDeck of sequential rank, all of the same suit, such as Q♥ J♥ 10♥ 9♥ 8♥ (a "queen-high straight flush")
// 3. Four of a kind - Four of a kind, also known as quads, is a hand that contains four CardDeck of one rank and one card of another rank (the kicker), such as 9♣ 9♠ 9♦ 9♥ J♥ ("four of a kind, nines"). It ranks below a straight flush and above a full house
// 4. Full house - A full house, also known as a full boat or a boat (and originally called a full hand), is a hand that contains three CardDeck of one rank and two CardDeck of another rank, such as 3♣ 3♠ 3♦ 6♣ 6♥ (a "full house, threes over sixes" or "threes full of sixes" or "threes full").
// 5. Flush - A flush is a hand that contains five CardDeck all of the same suit, not all of sequential rank, such as K♣ 10♣ 7♣ 6♣ 4♣ (a "king-high flush" or a "king-ten-high flush").[21] It ranks below a full house and above a straight.[6] Under ace-to-five low rules, flushes are not possible (so J♥ 8♥ 4♥ 3♥ 2♥ is a jack-high hand)
// 6. straight - A straight is a hand that contains five CardDeck of sequential rank, not all of the same suit, such as 7♣ 6♠ 5♠ 4♥ 3♥ (a "seven-high straight"). It ranks below a flush and above three of a kind.[6] Under high rules, an ace can rank either high (as in A♦ K♣ Q♣ J♦ 10♠, an ace-high straight) or low (as in 5♣ 4♦ 3♥ 2♥ A♠, a five-high straight), but cannot simultaneously rank both high and low (so Q♠ K♠ A♣ 2♥ 3♦ is an ace-high hand).
//7. Three of a kind - Three of a kind, also known as trips or a set, is a hand that contains three CardDeck of one rank and two CardDeck of two other ranks (the kickers), such as 2♦ 2♠ 2♣ K♠ 6♥ ("three of a kind, twos" or "trip twos" or a "set of twos"). It ranks below a straight and above two pair.[6]
//8. Two Pair - Two pair is a hand that contains two CardDeck of one rank, two CardDeck of another rank and one card of a third rank (the kicker), such as J♥ J♣ 4♣ 4♠ 9♥ 
//9. One Pair - One pair, or simply a pair, is a hand that contains two CardDeck of one rank and three CardDeck of three other ranks (the kickers), such as 4♥ 4♠ K♠ 10♦ 5♠ ("one pair, fours" or a "pair of fours"). It ranks below two pair and above high card
//10. High Card - High card, also known as no pair or simply nothing, is a hand that does not fall into any other category, such as K♥ J♥ 8♣ 7♦ 4♠ ("high card, king" or "king-jack-high" or "king-high").


// Game Logic
// Video Poker is single-player Poker where we try to optimise our score by getting the best possible hands. The gameplay is as follows.

//Create fn: USER STARTS WITH 100 points
// The user starts with 100 points.
//Global Variables:
//Create Button Click Deal - Draw random 5 CardDeck
// When they click the "Deal" button the computer deals a hand of 5 CardDeck. 


//input random number of CardDeck that he wants to replace with new random CardDeck
//The user can choose any number of their CardDeck to replace with new, random CardDeck.

//Calculate Hand and check win
// After the user finishes replacing CardDeck, the game assigns points based on the resulting hand. See rankings of Poker hands here.

// Please implement exercise logic here
// ########## GLOBAL VARIABLES ##########

//Start points
const startingPoints=100;
//Player's Total Points
let TotalPoints=startingPoints;
//Player's bidpoints
let BidPoints=0;
//Array to store cards in player's hand
let playersHand =[];
//number of cards should always be 5
const handSize=5;
//array to store player's cards to discard, or not held.
let cardToExchange =[];
//Number of Cards in Deck
let numCards = 52;
//Number of Cards that should be in hand.
const numOfCardsinHand = 5
// shuffled deck
let deck;


//----- DOM Elements kinda stuff to display on start----

//[Display]
//gamedisplay
const gameDisplayContainer = document.getElementById('game-display');
//Container to display cardContainer;
let cardContainer;
//gameInfo about wtf is happening in-game (score etc.)
let gameInfo



//Player to click on [BUTTONS]
// container to display buttons [Deal/Exchange]
let buttonContainer;
//button to deal cards
let dealButton
//button to exchange cards
let exchangeCardsButton

//Control can click or not
// only allow player to submit bid points at start of the round
let canSubmitBidPoints = true;
// Only allow player to click on dealButton after submitting bid points and before exchanging cards
let canDealStartingCards = false;
// only allow player to click on card after having dealt cards
let canClickCards = false;
// only allow player to click on exchangeOrHoldCardsButton after having dealt cards
let canExchangeOrHoldCards = false;

//[Points]
//// element to display heading for player's total points
let totalPointsHeading;
// element to display player's total points
let totalPointsInfo;
// container to display player's total points info and heading
let totalPointsContainer;

//[Bidding]
// container to display player's bid points info and heading
let bidPointsContainer 
// container to display player's bid points input box and button
let bidPointsInputContainer 
// element to display heading for player's bid points
let bidPointsHeading 
// element to display heading for player's bid points
  bidPointsHeading = document.createElement('p');
// element to display player's bid points
let bidPointsInfo
// input element to ask for points player wants to bid
let bidPointsInput
// button to submit the points player wants to bid
let bidPointsButton

const playingBoardonStart=()=> {
  //[DISPLAY - Creating El required on start.]

  //Creating Card-Container (Plyaing board)
  cardContainer = document.createElement('div');
  cardContainer.setAttribute('id', 'player-hand-container');
  cardContainer.classList.add('row', 'align-items-center', 'justify-content-center');

  //Creating an element to fill game info div for (starting instructions)
  gameInfo = document.createElement('div');
  gameInfo.setAttribute('id', 'game-info-container');


  //[BUTTONS]
  
  //[Container for Button]
  //Creating a div element to make container for buttons (Deal and Exchange).
  buttonContainer= document.createElement('div');
  buttonContainer.setAttribute('id','button-container');
  buttonContainer.classList.add('row')


  //[Buttons]
  //Creating Buttons to add into the div container above.

   //a. Create [deal cards] button
  dealButton = document.createElement('button');
  dealButton.setAttribute('id', 'deal-button');
  // dealButton.classList.add();

  //Create [exchange cards] button
  exchangeCardsButton = document.createElement('button');
  exchangeCardsButton.setAttribute('id', 'exchange-button');
  //exchangeCardsButton.classList.add();

  //[Points]

   //Create an element to display the heading "player's total points"
  totalPointsHeading = document.createElement('p');

  //Create an element to display an interactive scoreboard.
  totalPointsInfo = document.createElement('p');

  // container to display player's total points info and heading
  totalPointsContainer = document.createElement('div');
  totalPointsContainer.setAttribute('id', 'total-points-container');

  //[Bidding]
  //Creating an element to fill game info div for (Biddings)

  // container to display player's bid points info and heading
  bidPointsContainer = document.createElement('div');
  bidPointsContainer.setAttribute('id', 'bid-points-container');

  // container to display player's bid points input box and button
  bidPointsInputContainer = document.createElement('div');
  bidPointsInputContainer.setAttribute('id', 'bid-points-input-container');

  // element to display heading for player's bid points
  bidPointsHeading = document.createElement('p');
  // element to display player's bid points
  bidPointsInfo= document.createElement('p');
  // input element to ask for points player wants to bid
  bidPointsInput = document.createElement('input');
  // button to submit the points player wants to bid
  bidPointsButton = document.createElement('button');
};

//CREATE SHUFFLED DECK
//########## HELPER FUNCTIONS ##########

//random index generator.
// Get a random index ranging from 0 (inclusive) to max (exclusive).
const getRandomIndex = (max) => Math.floor(Math.random() * max);

//[Helper Fn1: SHUFFLER]

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

//[Helper Fn2: CREATING OF CARD DECKS - A-K, + Suits + colours]
//create a shuffled deck array with card objects and return this shuffled deck.
const makeDeck = () => {

  // Initialise an empty deck array, we will be pushing in the cards into this newDeck array.
  const newDeck = [];

  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  // Loop over the suits array
  for (let suitIndex = 0; suitIndex < suits.length; suitIndex += 1) {
    // Store the current suit in a variable
    const currentSuit = suits[suitIndex];
    let currentSymbol;
    let currentColour = 'red';

    if (currentSuit === 'hearts') {
      currentSymbol = '❤️';
    } else if (currentSuit === 'diamonds') {
      currentSymbol = '♦️';
    } else if (currentSuit === 'clubs') {
      currentSymbol = '♣️';
      currentColour = 'black';
    } else if (currentSuit === 'spades') {
      currentSymbol = '♠️';
      currentColour = 'black';
    }

    // Loop from 1 to 13 to create all cards for a given suit
    // rankCounter starts at 1 and not 0, and ends at 13.

    for (let rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      
      // Converts rankCounter to String.
      let cardName = `${rankCounter}`;
      let cardDisplay = `${rankCounter}`;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName === '1') {
        cardName = 'ace';
        cardDisplay = 'A';
      } else if (cardName === '11') {
        cardName = 'jack';
        cardDisplay = 'J';
      } else if (cardName === '12') {
        cardName = 'queen';
        cardDisplay = 'Q';
      } else if (cardName === '13') {
        cardName = 'king';
        cardDisplay = 'K';
      }

      //Single Card Object.
      const card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter,
        suitSymbol: currentSymbol,
        displayName: cardDisplay,
        colour: currentColour,
      };
      // Add the new card to the deck
      newDeck.push(card);
    }
  // Return the completed card deck
  return newDeck
  };
}
//Helper Fn3:
//print the output message to inform player he is losing or taking the bag.
//gameInfo will be dynamic and changes according to various states.
const displayGameInfo= (info) =>{
  gameInfo.innerHTML= info;
}

//[START OF THE GAME]

//Help Fn4 : 
//1. Empty card array.
//deal cards to player at the start of game.

const dealCards =(cards)=> {
  //empty cards from previous rounds.
  playersHand=[]; 
  
  for (let i=0; i<numOfCardsinHand; i+=1){
  playersHand.push(cards.pop());
}

//Helper Fn5:
//Card Element to be INSIDE the card Container. 
const createCard = (card) =>{

  //SUIT
  const currentSuit = document.createElement('div');
  currentSuit.classList.add(card.colour,'suit');
  currentSuit.innerText= card.suitSymbol;

  //NAME
  const CurrentName = document.createElement('div');
  CurrentName.classList.add('name', card.color);
  CurrentName.innerText = card.cardDisplay;

  //The Card Element.
  const cardEl = document.createElement('div');
  cardEl.classList.add('card');
  
  //Appending the NAME and SUIT to the CARD Element.
  cardEl.appendChild(CurrentSuit);
  cardEl.appendChild(CurrentName);

  return cardEl;
};

//Helper Fn 6:
//Exchange Cards Function.
//when player clicks this card, the SELECTED card will be stored in an array of cards that will be exchanged (CARDS TO EXCHANGE Var)

//Parameter cardToExchange is located,defined in initGame.
const SELECTCardsToExchange = (cardEl, cardToExchange) => {

  //Default Validation, CARDS ARE NOT Selected before.
  let isCardPresent = false; 

  //Condition set : if CardsToExchange More than 0, = there are cards to exchange.
  //If CTE =0, means it wont check for cards in the CTE array.
  if (cardToExchange.length > 0) {
    for (let j = 0; j < cardToExchange.length; j += 1) {

      if (cardToExchange === cardToExchange[j]) {
        isCardPresent = true;
        cardToExchange.splice(j, 1); 
        // remove the card from array
        j -= 1; // account for the decrease in array length

        // remove the card border display to let player know card is dis-selected
        cardEl.classList.remove('card-border');
      }
    }
  }
  if (isCardPresent === false) {
    // store the card
    cardToExchange.push(cardToExchange);
    // display the card border to let player know card is selected
    cardEl.classList.add('card-border');
  }
};
// exchange cards fn
const exchangeCards = () => {
  // exchange the selected cards in playerHand
  for (let i = 0; i < playerHand.length; i += 1) {
    for (let j = 0; j < cardToExchange.length; j += 1) {
      if (cardToExchange[j].rank === playerHand[i].rank
        && cardToExchange[j].suit === playerHand[i].suit) {
        playerHand.splice(i, 1, deck.pop());
      }
    }
  }
  // empty cardsToExchange array since we do not need the cards inside anymore
  cardToExchange = [];

  // clear previous display of player's hand
  cardContainer.innerHTML = '';
  // make the player's cards' display and display them
  for (let i = 0; i < playerHand.length; i += 1) {
    const cardEl = createCard(playerHand[i]);
    cardContainer.appendChild(cardEl);
  }
};
}
//INSERT THE VARIOUS POSSIBLE SCORING SCENARIOS
//Yet to implement


//Calculating Player Hand Score
const calcHandScore = () => {

  if (isRoyalFlush() === true) { // royal flush
    handScore = 10;
  } else if (isStraight() === true && isFlush() === true) { // straight flush
    handScore = 9;
  } else if (numOf4OfAKind === 1) { // 4 of a kind
    handScore = 8;
  } else if (isFullHouse() === true) { // full house
    handScore = 7;
  } else if (isFlush() === true) { // flush
    handScore = 6;
  } else if (isStraight() === true) { // straight
    handScore = 5;
  } else if (numOf3OfAKind === 1) { // 3 of a kind
    handScore = 4;
  } else if (numOfPairs === 2) { // 2 pairs
    handScore = 3;
  } else if (numOfPairs === 1) { // 1 pair
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

// Game initialization =============================================
// to initilize game
const initGame = () => {
  // make and store a shuffled deck
  deck = shuffleCards(makeDeck());

  // initialize starting elements
  playingBoardonStart();

  // initialize cardContainer functionality
  gameDisplayContainer.appendChild(cardContainer);

  // initialize gameInfo functionality
  displayGameInfo('Welcome! Please submit your bid points to start playing.');
  gameDisplayContainer.appendChild(gameInfo);

  // initialize dealButton functionality
  dealButton.setAttribute('id', 'deal-button');
  dealButton.innerText = 'deal cards';
  dealButton.addEventListener('click', () => {
    if (canDealStartingCards === true) {
      // prevent dealing starting cards until start of next round
      canDealStartingCards = false;

      // deal starting cards to player hand
      dealCards(deck);

      // make the cards' display and display them and
      // add event listener to store the cards in case player wants to exchange them later
      for (let i = 0; i < playerHand.length; i += 1) {
        const cardEl = createCard(playerHand[i]);
        // store the current card in case the player wants to exchange it later
        const cardToExchange = playerHand[i];
        // eslint-disable-next-line no-loop-func
        cardEl.addEventListener('click', (event) => {
          if (canClickCards === true) {
            // select the card to exchange or unselect it
            SELECTCardsToExchange(event.currentTarget, cardToExchange);
          }
        });
        cardContainer.appendChild(cardEl);
      }

      // allow player to start clicking on cards he/she wants to exchange
      canClickCards = true;
      // allow player to start exchanging cards for this round
      canExchangeOrHoldCards = true;
      // display instruction for player to select cards to exchange
      displayGameInfo('Click on any card(s) you want to exchange and click the \'exchange/hold cards\' button to see your score.');
    }
  }); 
  
  buttonsContainer.appendChild(dealButton);
 // initialize exchangeCardsButton functionality
  exchangeOrHoldCardsButton.innerText = 'exchange/hold cards';
  exchangeOrHoldCardsButton.addEventListener('click', () => {
    if (canExchangeOrHoldCards === true) {
      // prevent exchanging cards until next round of starting cards have been dealt
      canExchangeOrHoldCards = false;
      // prevent clicking on cards until next round of starting cards have been dealt
      canClickCards = false;

      // exchange the cards if player selected cards to exchange
      if (cardToExchange.length > 0) {
        exchangeCards();
      }

      // // check player hand's score (TO BE DONE)
      // eorder player's cards from highest to lowest rank
      // reorderCards();
      // store similar ranks together and used to check for winning conditions
      // groupPlayerCardsByRank();
      // find number of pairs/3 of a kind/4 of a kind
      // findNumOfSimilarCards();
      // calculate hand score and store in handScore
      // calcHandScore();

      // // add points to player's total points based on bid points and hand score
      // addPoints();

      // display player's total points
      totalPointsInfo.innerText = playerTotalPoints;

      // it is the end of the round so allow player to begin new round by submitting points
      canSubmitBidPoints = true;
      // calculate points won this round
      const pointsWonThisRound = calcPointsWon();
      // display handscore and points player won this round and submit points to play again
      displayGameInfo(`Your hand score is ${handScore}. You earned ${pointsWonThisRound} points.
      Please submit points to play another round.`);
    }
  });
  buttonsContainer.appendChild(exchangeOrHoldCardsButton);

  // initialize buttonsContainer functionality
  gameDisplayContainer.appendChild(buttonsContainer);

  // Total points and bid points -------------------------------------------
  // initialize bidPointsHeadingEl functionality
  bidPointsHeading.innerText = 'Points Bidded';
  bidPointsContainer.appendChild(bidPointsHeading);
  // initialize bidPointsInfoEl functionality
  bidPointsInfo.innerText = playerBidPoints;
  bidPointsContainer.appendChild(bidPointsInfo);
  // initialize bidPointsContainer functionality
  gameDisplayContainer.appendChild(bidPointsContainer);
  // initialize totalPointsHeadingEl functionality
  totalPointsHeading.innerText = 'Total Points';
  totalPointsContainer.appendChild(totalPointsHeading);
  totalPointsContainer.appendChild(totalPointsHeading);
  // initialize totalPointsInfoEl  functionality
  totalPointsInfo.innerText = playerTotalPoints;
  totalPointsContainer.appendChild(totalPointsInfo);
  // initialize totalPointsContainer functionality
  gameDisplayContainer.appendChild(totalPointsContainer);

  // initialize bidPointsInputEl functionality
  bidPointsInput.setAttribute('type', 'text');
  bidPointsInput.setAttribute('placeholder', 'enter points to bid');
  bidPointsInputContainer.appendChild(bidPointsInput);
  // initialize bidPointsButton functionality
  bidPointsButton.setAttribute('id', 'bid-points-button');
  bidPointsButton.innerText = 'submit points';
  bidPointsButton.addEventListener('click', () => {
    if (canSubmitBidPoints === true) {
      if (bidPointsInputEl.value > 0) { 
        // player submitted a valid bid points
        // player has submitted bid points so they cannot submit anymore in this round
        canSubmitBidPoints = false;

        // clear player's hand container display since a new round has started
        cardContainer.innerHTML = '';

        // store bid points and display it
        playerBidPoints = bidPointsInput.value;
        bidPointsInfo.innerText = playerBidPoints;
        // clear bid points from bidPointsInputEl display
        bidPointsInput.value = '';
        // minus bid points away from player's total points
        playerTotalPoints -= playerBidPoints;
        // display player's total points
        totalPointsInfo.innerText = playerTotalPoints;

        // allow player to deal starting cards since it is a new round
        canDealStartingCards = true;
        // display instruction for player to click on dealButton to deal cards
        displayGameInfo('Please click on the \'deal cards\' button to deal cards.');
      } else {
        // tell player to submit a valid bid points
        bidPointsInputEl.value = 'please input a number > 0';
      }
    } else {
      // clear bid points from bidPointsInputEl display since
      // player might have accidentally tried submitting
      bidPointsInput.value = '';
    }
  });
  bidPointsInputContainer.appendChild(bidPointsButton);
  gameDisplayContainer.appendChild(bidPointsInputContainer);
};

// Initilize game
initGame();