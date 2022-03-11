import '@testing-library/jest-dom';
import { joinDeck, dealDeck } from '../logic/trick'

const CURRENT_DECK = [[{value: "A", suit: "♥"}, {value: "2", suit: "♥"}], [{value: "3", suit: "♥"}, {value: "A", suit: "♠"}], [{value: "2", suit: "♠"}, {value: "3", suit: "♠"}]];
const JOINED_DECK = [{value: "A", suit: "♥"}, {value: "2", suit: "♥"}, {value: "3", suit: "♥"}, {value: "A", suit: "♠"}, {value: "2", suit: "♠"}, {value: "3", suit: "♠"}];
const TEST_DECK = [[{value: "2", suit: "♠"}, {value: "2", suit: "♥"}], [{value: "3", suit: "♠"}, {value: "3", suit: "♥"}], [{value: "A", suit: "♥"}, {value: "A", suit: "♠"}]];
const TEST_DECK_2 = [[{value: "A", suit: "♥"}, {value: "A", suit: "♠"}], [{value: "2", suit: "♥"}, {value: "2", suit: "♠"}], [{value: "3", suit: "♥"}, {value: "3", suit: "♠"}]];

describe('trick', () => {
  describe('#joinDeck', () => {
    it('joins deck when parameters are valid', () => {
      let pickedRow = 1;
      let deck = joinDeck(pickedRow, CURRENT_DECK);
      expect(deck).toEqual(TEST_DECK);
    });
  
    it('returns empty deck when pickedRow is invalid', () => {
      let pickedRow = 5;
      let deck = joinDeck(pickedRow, CURRENT_DECK);
      expect(deck).toEqual([[[]],[[]],[[]]]);
    })
  
    it('returns empty deck when currentDeck is empty', () => {
      let pickedRow = 2;
      let deck = joinDeck(pickedRow, [[],[],[]]);
      expect(deck).toEqual([[],[],[]]);
    })
  });

  describe('#dealDeck', () => {
    it('deals deck when parameters are valid', () => {
      let deck = dealDeck(JOINED_DECK);
      expect(deck).toEqual(TEST_DECK_2);
    });
  
    it('returns empty deck when joinedDeck is empty', () => {
      let deck = dealDeck([[],[],[]]);
      expect(deck).toEqual([[[]],[[]],[[]]]);
    })
  });
});
