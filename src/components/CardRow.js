const CardRow = ({ deck }) => {

  return(
    <div className="cards--container">
      {deck.map(row => (
      <div className="cards--row" key={`${deck.indexOf(row)}`}>
        {row.map(({value, suit}) => (
          <div className={`card card--${suit}`} key={`${value}-${suit}`}>{value}{suit}</div>
        ))}
      </div>
      ))}
    </div>
  );
}

export default CardRow;
