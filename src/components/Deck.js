import CardRow from './CardRow';
import { trickDeck } from '../logic/deck';

const Deck = () => {
  
  return(
    <div className="cards" data-testid="deck">
        <CardRow deck={trickDeck} />;
    </div>
  );
};

export default Deck;
