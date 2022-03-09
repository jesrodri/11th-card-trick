import '@testing-library/jest-dom';
import { buildDeck } from '../logic/utils'

const VALUES = [ "A", "2", "3" ];
const SUITS = [ "♥", "♠" ];
const TEST_DECK = [{value: "A", suit: "♥"}, {value: "2", suit: "♥"}, {value: "3", suit: "♥"}, {value: "A", suit: "♠"}, {value: "2", suit: "♠"}, {value: "3", suit: "♠"}];

describe('utils', () => {
  describe('#buildDeck', () => {
    it('builds deck when parameters are valid', () => {
      let deck = buildDeck(VALUES, SUITS);
      expect(deck).toEqual(TEST_DECK);
    });
  
    it('returns empty deck when suits is empty', () => {
      let deck = buildDeck(VALUES, []);
      expect(deck).toEqual([]);
    })
  
    it('returns empty deck when values is empty', () => {
      let deck = buildDeck([], SUITS);
      expect(deck).toEqual([]);
    })
  });
});
