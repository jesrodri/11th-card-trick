import { useState } from "react";
const VALUES = [ "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
const SUITS = [ "♥", "♠", "♦", "♣" ];
let deck = [];
const TRICK_CARDS = 21;

function BuildDeck() {
  SUITS.forEach(suit => { 
    VALUES.forEach(value => {
      let card = {
        value: value,
        suit: suit
      }
      deck.push(card);
    })
  })
  return deck;
}

deck = BuildDeck();

const Deck = () => {
  const initialDeck = [...deck];
  const shuffledDeck = [...deck].sort(() => Math.random() - 0.5);
  const trickDeck = [...shuffledDeck].slice(0, TRICK_CARDS);

  const[showInitialDeck, setShowInitialDeck] = useState(true);
  const[showShuffleDeck, setShowShuffleDeck] = useState(false);
  const[showTrickDeck, setShowTrickDeck] = useState(false);

  return(
    <>
    <div className='buttons'>
      <button className='buttons__button' onClick={() => { setShowInitialDeck(true); setShowShuffleDeck(false); setShowTrickDeck (false); }}>Initial Deck</button>
      <button className='buttons__button' onClick={() => { setShowInitialDeck(false); setShowShuffleDeck(true); setShowTrickDeck (false); }}>Shuffle Deck</button>
      <button className='buttons__button' onClick={() => { setShowInitialDeck(false); setShowShuffleDeck(false); setShowTrickDeck (true); }}>21 Cards</button>
    </div>
    <div className="cards" data-testid="deck">
      {showInitialDeck && initialDeck.map(({value, suit}) => (
          <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
      ))}
      {showShuffleDeck && shuffledDeck.map(({value, suit}) => (
          <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
      ))}
      {showTrickDeck && trickDeck.map(({value, suit}) => (
          <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
      ))}
    </div>
    </>
  );
};

export default Deck;
