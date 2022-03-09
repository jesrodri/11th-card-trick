import { trickDeck } from '../logic/deck';

const Deck = () => {

  function cardRow(deck) {
    return(
      deck.map(row => (
      <div className="cards--row">
        {row.map(({value, suit}) => (
          <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
        ))}
      </div>
      ))
    );
  };
  
  return(
    <div className="cards" data-testid="deck">
        {cardRow( trickDeck )};
    </div>
  );
};

export default Deck;
