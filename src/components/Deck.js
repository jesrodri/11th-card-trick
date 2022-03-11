import { useState } from 'react';
import DecideAction from './DecideAction';
import { trickDeck } from '../logic/deck';
import { joinDeck } from '../logic/trick';

const Deck = () => {

  const [round, setRound] = useState(0);
  const [currentDeck, setCurrentDeck] = useState(trickDeck);

  const pickRow = (pickedRow) => {
    if (round < 3) {
      setCurrentDeck( joinDeck(pickedRow, currentDeck) );
      setRound(round + 1);
    }
  };

  return(
    <div className="cards" data-testid="deck">
      <div className="buttons--container">
        <button className="button" onClick={() => pickRow(1)}>1</button>
        <button className="button" onClick={() => pickRow(2)}>2</button>
        <button className="button" onClick={() => pickRow(3)}>3</button>
      </div>
      <DecideAction round={round} deck={currentDeck} />;
    </div>
  );
};

export default Deck;
