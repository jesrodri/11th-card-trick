import { trickDeck } from './deck';

export const joinDeck = (pickedRow) => {
  let joinedDeck = [[], [], []];
  if (pickedRow === 1) {
    joinedDeck = [...trickDeck[2], ...trickDeck[0], ...trickDeck[1]];
  } else if (pickedRow === 2) {
    joinedDeck = [...trickDeck[2], ...trickDeck[1], ...trickDeck[1]];
  } else if (pickedRow === 3) {
    joinedDeck = [...trickDeck[1], ...trickDeck[2], ...trickDeck[0]];
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
