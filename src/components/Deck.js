import { trickDeck } from '../logic/deck';

const Deck = () => {
  return(
    <div className="cards" data-testid="deck">
      {trickDeck.map(({value, suit}) => (
          <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
      ))}
    </div>
  );
};

export default Deck;
