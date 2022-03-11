import { ROW_CARDS, TRICK_CARDS } from './constants';

export function buildDeck(values, suits) {
  let deck = [];
  suits.forEach(suit => { 
    values.forEach(value => {
      let card = {
        value: value,
        suit: suit
      }
      deck.push(card);
    })
  })
  return deck;
}

function shuffleDeck(deck) {
  const shuffledDeck = deck.sort(() => Math.random() - 0.5);
  return shuffledDeck;
}

export function prepareDeck(deck) {
  const shuffledDeck = shuffleDeck(deck);
  const trickDeck = [
    shuffledDeck.slice(0, ROW_CARDS),
    shuffledDeck.slice(ROW_CARDS, (ROW_CARDS*2)),
    shuffledDeck.slice((ROW_CARDS*2), TRICK_CARDS)
  ];
  return trickDeck;
}
