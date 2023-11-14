import { useState } from "react";
import "./Votes.css";

const Votes = () => {
  const [chocVotes, setChocVotes] = useState(0);
  const [vanVotes, setVanVotes] = useState(0);
  const [strawVotes, setStrawVotes] = useState(0);
  const total = chocVotes + vanVotes + strawVotes;

  const getPercent = (votes: number): number | string => {
    return total === 0 ? 0 : +((votes / total) * 100).toFixed(2);
  };

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <section className="flavor-buttons">
        <button
          onClick={() => {
            setChocVotes((prev) => prev + 1);
          }}
          className="chocolate-btn"
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setVanVotes((prev) => prev + 1);
          }}
          className="vanilla-btn"
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setStrawVotes((prev) => prev + 1);
          }}
          className="strawberry-btn"
        >
          Strawberry
        </button>
      </section>
      <section className="results">
        <div className="chocolate">
          <p className="chocolate-result">
            <span className="bold">Chocolate: </span>

            <span className="percent">
              <span className="count">{total === 0 ? "" : chocVotes} </span>
              {total === 0 ? `No votes yet.` : `(${getPercent(chocVotes)}%)`}
            </span>
          </p>
          <p
            className="chocolate-bar"
            style={{ width: `${getPercent(chocVotes)}%` }}
          ></p>
        </div>
        <div className="vanilla">
          <p className="vanilla-result">
            <span className="bold">Vanilla: </span>

            <span className="percent">
              <span className="count">{total === 0 ? "" : vanVotes} </span>
              {total === 0 ? `No votes yet.` : `(${getPercent(vanVotes)}%)`}
            </span>
          </p>
          <p
            className="vanilla-bar"
            style={{ width: `${getPercent(vanVotes)}%` }}
          ></p>
        </div>
        <div className="strawberry">
          <p className="strawberry-result">
            <span className="bold">Strawberry: </span>

            <span className="percent">
              <span className="count">{total === 0 ? "" : strawVotes} </span>
              {total === 0 ? `No votes yet.` : `(${getPercent(strawVotes)}%)`}
            </span>
          </p>
          <p
            className="strawberry-bar"
            style={{ width: `${getPercent(strawVotes)}%` }}
          ></p>
        </div>
      </section>
    </div>
  );
};

export default Votes;
