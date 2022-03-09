import { buildDeck } from '../logic/utils';
import { TRICK_CARDS, VALUES, SUITS } from '../logic/utils';

const Deck = () => {
  const initialDeck = buildDeck(VALUES, SUITS);
  const shuffledDeck = [...initialDeck].sort(() => Math.random() - 0.5);
  const trickDeck = shuffledDeck.slice(0, TRICK_CARDS);

  return(
    <div className="cards" data-testid="deck">
      {trickDeck.map(({value, suit}) => (
          <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
      ))}
    </div>
  );
};

export default Deck;
