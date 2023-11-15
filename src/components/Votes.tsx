import { useState } from "react";
import "./Votes.css";
import VotesModel from "../models/VotesModel";

interface Props {
  flavor1: string;
  flavor2: string;
  flavor3: string;
  flavor1Color: string;
  flavor2Color: string;
  flavor3Color: string;
}

const Votes = ({
  flavor1,
  flavor2,
  flavor3,
  flavor1Color,
  flavor2Color,
  flavor3Color,
}: Props) => {
  /* const [chocVotes, setChocVotes] = useState(0);
  const [vanVotes, setVanVotes] = useState(0);
  const [strawVotes, setStrawVotes] = useState(0); */
  const [votes, setVotes] = useState<VotesModel>({
    flavor1: 0,
    flavor2: 0,
    flavor3: 0,
  });
  const total = votes.flavor1 + votes.flavor2 + votes.flavor3;

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
              copyOfPrev.flavor1++;
              return copyOfPrev;
            });
          }}
          className="chocolate-btn"
        >
          {flavor1}
        </button>
        <button
          onClick={() => {
            setVotes((prev) => {
              const copyOfPrev: VotesModel = { ...prev };
              copyOfPrev.flavor2++;
              return copyOfPrev;
            });
          }}
          className="vanilla-btn"
        >
          {flavor2}
        </button>
        <button
          onClick={() => {
            setVotes((prev) => {
              const copyOfPrev: VotesModel = { ...prev };
              copyOfPrev.flavor3++;
              return copyOfPrev;
            });
          }}
          className="strawberry-btn"
        >
          {flavor3}
        </button>
      </section>
      <section className="results">
        <div className="chocolate">
          <p className="chocolate-result">
            <span className="bold">{flavor1}: </span>

            <span className="percent">
              <span className="count">{total === 0 ? "" : votes.flavor1} </span>
              {total === 0
                ? `No votes yet.`
                : `(${getPercent(votes.flavor1)}%)`}
            </span>
          </p>
          <p
            className="chocolate-bar"
            style={{
              width: `${getPercent(votes.flavor1)}%`,
              backgroundColor: flavor1Color,
            }}
          ></p>
        </div>
        <div className="vanilla">
          <p className="vanilla-result">
            <span className="bold">{flavor2}: </span>

            <span className="percent">
              <span className="count">{total === 0 ? "" : votes.flavor2} </span>
              {total === 0
                ? `No votes yet.`
                : `(${getPercent(votes.flavor2)}%)`}
            </span>
          </p>
          <p
            className="vanilla-bar"
            style={{
              width: `${getPercent(votes.flavor2)}%`,
              backgroundColor: flavor2Color,
            }}
          ></p>
        </div>
        <div className="strawberry">
          <p className="strawberry-result">
            <span className="bold">{flavor3}: </span>

            <span className="percent">
              <span className="count">{total === 0 ? "" : votes.flavor3} </span>
              {total === 0
                ? `No votes yet.`
                : `(${getPercent(votes.flavor3)}%)`}
            </span>
          </p>
          <p
            className="strawberry-bar"
            style={{
              width: `${getPercent(votes.flavor3)}%`,
              backgroundColor: flavor3Color,
            }}
          ></p>
        </div>
      </section>
    </div>
  );
};

export default Votes;
