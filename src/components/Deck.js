import CardRow from './CardRow';
import { useState } from 'react';
import { trickDeck } from '../logic/deck';
import { joinDeck } from '../logic/trick';

const Deck = () => {

  const [round, setRound] = useState(0);
  const [mergedDeck, setMergedDeck] = useState(trickDeck);

  const pickRow = (pickedRow) => {
    if (round < 3) {
      setMergedDeck( joinDeck(pickedRow) );
      setRound(round + 1);
    }
    console.log(trickDeck);
    console.log(mergedDeck);
  };

  return(
    <div className="cards" data-testid="deck">
      <div className="buttons--container">
        <button className="button" onClick={() => pickRow(1)}>1</button>
        <button className="button" onClick={() => pickRow(2)}>2</button>
        <button className="button" onClick={() => pickRow(3)}>3</button>
      </div>
      <CardRow deck={mergedDeck}/>;
    </div>
  );
};

export default Deck;
