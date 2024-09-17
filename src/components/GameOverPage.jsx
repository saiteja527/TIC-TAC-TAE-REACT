import React from "react";

const GameOverPage = ({ winner,onRematch }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's Draw</p>}
      <p>
        <button onClick={onRematch}>Re-Match!</button>
      </p>
    </div>
  );
};

export default GameOverPage;
