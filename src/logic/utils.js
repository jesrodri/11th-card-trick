const VALUES = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
const SUITS = [ "♥", "♠", "♦", "♣" ];
const TRICK_CARDS = 21;

export function buildDeck(VALUES, SUITS) {
  let deck = [];
  SUITS.forEach(suit => { 
    VALUES.forEach(value => {
      let card = {
        value: value,
        suit: suit
      }
      deck.push(card);
    })
  })
  return deck;
}

export { TRICK_CARDS, VALUES, SUITS };
