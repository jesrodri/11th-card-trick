const RevealCard = ({ deck }) => {

  return(
    <div className={`picked--card card--${deck[1][3].suit}`} key={`${deck[1][3].value}-${deck[1][3].suit}`}>{deck[1][3].value}{deck[1][3].suit}</div>
  );
};

export default RevealCard;
