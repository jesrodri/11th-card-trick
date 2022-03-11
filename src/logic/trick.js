export const joinDeck = (pickedRow, currentDeck) => {
  let joinedDeck = [[], [], []];
  if (pickedRow === 1) {
    joinedDeck = [...currentDeck[2], ...currentDeck[0], ...currentDeck[1]];
  } else if (pickedRow === 2) {
    joinedDeck = [...currentDeck[2], ...currentDeck[1], ...currentDeck[0]];
  } else if (pickedRow === 3) {
    joinedDeck = [...currentDeck[1], ...currentDeck[2], ...currentDeck[0]];
  }
  return dealDeck(joinedDeck);
}

export const dealDeck = (joinedDeck) => {
  let newDeck = [[], [], []];

  joinedDeck.map(card => (
    ((joinedDeck.indexOf(card) % 3) === 0) ? newDeck[0].push(card)
    : ((joinedDeck.indexOf(card) % 3) === 1) ? newDeck[1].push(card)
    : newDeck[2].push(card)
  ));
  return newDeck;
}
