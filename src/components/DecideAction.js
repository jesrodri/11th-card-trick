import CardRow from './CardRow';
import RevealCard from './RevealCard';

const DecideAction = (round, deck) => {
  if (round === 3) {
    return(
      <RevealCard deck={deck}/>
    );
  } else {
    return(
      <CardRow deck={deck}/>
    );
  }
};

export default DecideAction;
