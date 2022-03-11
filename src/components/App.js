import '../styles/App.css';
import Deck from './Deck';
import { trickDeck } from '../logic/deck';

function App() {
  return (
    <div className="App">
      <h1 className="title">11th Card Trick</h1>
      <p className="text">Pick a card and remember it.</p>
      <p className="text">Click on the button corresponding to the row where your card is.</p>
      <Deck deck={trickDeck} />
    </div>
  );
}

export default App;
