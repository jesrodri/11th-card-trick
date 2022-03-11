import { joinDeck } from '../logic/trick';
import { useState } from 'react';
import CardRow from './CardRow';
import RevealCard from './RevealCard';

const Deck = ({ deck }) => {

  const [round, setRound] = useState(0);
  const [currentDeck, setCurrentDeck] = useState(deck);

  const pickRow = (pickedRowId) => {
    if (round < 3) {
      setCurrentDeck( joinDeck(pickedRowId, currentDeck) );
      setRound(round => round + 1);
    }
  };

  if (round < 3) {
    return(
      <div className="cards" data-testid="deck">
        <div className="buttons--container">
          <button className="button" onClick={() => pickRow(1)}>1</button>
          <button className="button" onClick={() => pickRow(2)}>2</button>
          <button className="button" onClick={() => pickRow(3)}>3</button>
        </div>
        <CardRow deck={currentDeck}/>
      </div>
    );
  } else if (round === 3) {
      return(
        <div className="cards" data-testid="deck">
          <p className="text--result">Your card is...</p>
          <RevealCard deck={currentDeck}/>
        </div>
      );
    }
};

export default Deck;
