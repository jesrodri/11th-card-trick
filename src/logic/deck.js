import { VALUES, SUITS, ROW_CARDS, TRICK_CARDS } from './constants';

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

const initialDeck = buildDeck(VALUES, SUITS);
const shuffledDeck = [...initialDeck].sort(() => Math.random() - 0.5);
const cutDeck = shuffledDeck.slice(0, TRICK_CARDS);
const firstRow = cutDeck.slice(0, ROW_CARDS);
const secondRow = cutDeck.slice(ROW_CARDS, (ROW_CARDS*2));
const thirdRow = cutDeck.slice((ROW_CARDS*2), TRICK_CARDS);
const trickDeck = [firstRow, secondRow, thirdRow];

export { trickDeck };
