import { buildDeck } from '../logic/utils';
import { TRICK_CARDS, VALUES, SUITS, ROW_CARDS } from '../logic/utils';

const Deck = () => {
  const initialDeck = buildDeck(VALUES, SUITS);
  const shuffledDeck = [...initialDeck].sort(() => Math.random() - 0.5);
  const trickDeck = shuffledDeck.slice(0, TRICK_CARDS);
  const firstRow = trickDeck.slice(0, ROW_CARDS);
  const secondRow = trickDeck.slice(ROW_CARDS, (ROW_CARDS*2));
  const thirdRow = trickDeck.slice((ROW_CARDS*2), TRICK_CARDS);

  return(
    <div className="cards" data-testid="deck">
      <div className="cards--row">
        {firstRow.map(({value, suit}) => (
            <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
        ))}
      </div>
      <div className="cards--row">
        {secondRow.map(({value, suit}) => (
            <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
        ))}
      </div>
      <div className="cards--row">
        {thirdRow.map(({value, suit}) => (
            <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
        ))}
      </div>
    </div>
  );
};

export default Deck;
