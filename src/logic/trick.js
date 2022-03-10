export const joinDeck = (pickedRow, mergedDeck) => {
  let joinedDeck = [[], [], []];
  if (pickedRow === 1) {
    joinedDeck = [...mergedDeck[2], ...mergedDeck[0], ...mergedDeck[1]];
  } else if (pickedRow === 2) {
    joinedDeck = [...mergedDeck[2], ...mergedDeck[1], ...mergedDeck[0]];
  } else if (pickedRow === 3) {
    joinedDeck = [...mergedDeck[1], ...mergedDeck[2], ...mergedDeck[0]];
  }
  console.log(pickedRow);
  // console.log(trickDeck);
  // console.log(joinedDeck);
  return dealDeck(joinedDeck);
}

const dealDeck = (joinedDeck) => {
  let newDeck = [[], [], []];

  joinedDeck.map(card => (
    ((joinedDeck.indexOf(card) % 3) === 0) ? newDeck[0].push(card)
    : ((joinedDeck.indexOf(card) % 3) === 1) ? newDeck[1].push(card)
    : newDeck[2].push(card)
  ));
  return newDeck;
}
