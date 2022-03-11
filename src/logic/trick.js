export const joinDeck = (pickedRowId, deck) => {
  let joinedDeck;
  if (pickedRowId === 1) {
    joinedDeck = [...deck[2], ...deck[0], ...deck[1]];
  } else if (pickedRowId === 2) {
    joinedDeck = [...deck[2], ...deck[1], ...deck[0]];
  } else if (pickedRowId === 3) {
    joinedDeck = [...deck[1], ...deck[2], ...deck[0]];
  }
  return dealDeck(joinedDeck);
}

export const dealDeck = (joinedDeck) => {
  let newDeck = [[], [], []];
  const NUMBER_OF_ROWS = 3;
  
  joinedDeck.map(card => {
    if ((joinedDeck.indexOf(card) % NUMBER_OF_ROWS) === 0) {
      newDeck[0].push(card);
    } else if ((joinedDeck.indexOf(card) % NUMBER_OF_ROWS) === 1) {
      newDeck[1].push(card);
    } else if ((joinedDeck.indexOf(card) % NUMBER_OF_ROWS) === 2) {
      newDeck[2].push(card);
    }
  });
  return newDeck;
}

