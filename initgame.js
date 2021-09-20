// element to display heading for player's bid points
let bidPointsHeadingEl;
// element to display heading for player's bid points
  bidPointsHeadingEl = document.createElement('p');

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
            selectOrUnselectCardToExchange(event.currentTarget, cardToExchange);
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
      if (cardsToExchange.length > 0) {
        exchangeCards();
      }

      // check player hand's score ------------------------------
      // reorder player's cards from highest to lowest rank
      reorderCards();
      // store similar ranks together and used to check for winning conditions
      groupPlayerCardsByRank();
      // find number of pairs/3 of a kind/4 of a kind
      findNumOfSimilarCards();
      // calculate hand score and store in handScore
      calcHandScore();

      // add points to player's total points based on bid points and hand score
      addPoints();
      // display player's total points
      totalPointsInfoEl.innerText = playerTotalPoints;

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
  totalPointsContainer.appendChild(totalPointsHeading;
  // initialize totalPointsInfoEl  functionality
  totalPointsInfo.innerText = playerTotalPoints;
  totalPointsContainer.appendChild(totalPointsInfo;
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
      if (bidPointsInputEl.value > 0) { // player submitted a valid bid points
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