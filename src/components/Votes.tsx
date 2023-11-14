import { useState } from "react";
import "./Votes.css";
import VotesModel from "../models/VotesModel";

const Votes = () => {
  /* const [chocVotes, setChocVotes] = useState(0);
  const [vanVotes, setVanVotes] = useState(0);
  const [strawVotes, setStrawVotes] = useState(0); */
  const [votes, setVotes] = useState<VotesModel>({
    chocolate: 0,
    vanilla: 0,
    strawberry: 0,
  });
  const total = votes.chocolate + votes.vanilla + votes.strawberry;

  const getPercent = (votes: number): number => {
    return total === 0 ? 0 : +((votes / total) * 100).toFixed(2);
  };

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <section className="flavor-buttons">
        <button
          onClick={() => {
            setVotes((prev) => {
              const copyOfPrev: VotesModel = { ...prev };
              copyOfPrev.chocolate++;
              return copyOfPrev;
            });
          }}
          className="chocolate-btn"
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setVotes((prev) => {
              const copyOfPrev: VotesModel = { ...prev };
              copyOfPrev.vanilla++;
              return copyOfPrev;
            });
          }}
          className="vanilla-btn"
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setVotes((prev) => {
              const copyOfPrev: VotesModel = { ...prev };
              copyOfPrev.strawberry++;
              return copyOfPrev;
            });
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
              <span className="count">
                {total === 0 ? "" : votes.chocolate}{" "}
              </span>
              {total === 0
                ? `No votes yet.`
                : `(${getPercent(votes.chocolate)}%)`}
            </span>
          </p>
          <p
            className="chocolate-bar"
            style={{ width: `${getPercent(votes.chocolate)}%` }}
          ></p>
        </div>
        <div className="vanilla">
          <p className="vanilla-result">
            <span className="bold">Vanilla: </span>

            <span className="percent">
              <span className="count">{total === 0 ? "" : votes.vanilla} </span>
              {total === 0
                ? `No votes yet.`
                : `(${getPercent(votes.vanilla)}%)`}
            </span>
          </p>
          <p
            className="vanilla-bar"
            style={{ width: `${getPercent(votes.vanilla)}%` }}
          ></p>
        </div>
        <div className="strawberry">
          <p className="strawberry-result">
            <span className="bold">Strawberry: </span>

            <span className="percent">
              <span className="count">
                {total === 0 ? "" : votes.strawberry}{" "}
              </span>
              {total === 0
                ? `No votes yet.`
                : `(${getPercent(votes.strawberry)}%)`}
            </span>
          </p>
          <p
            className="strawberry-bar"
            style={{ width: `${getPercent(votes.strawberry)}%` }}
          ></p>
        </div>
      </section>
    </div>
  );
};

export default Votes;
