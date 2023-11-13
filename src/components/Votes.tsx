import "./Votes.css";

const Votes = () => {
  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <section className="flavor-buttons">
        <button className="chocolate-btn">Chocolate</button>
        <button className="vanilla-btn">Vanilla</button>
        <button className="strawberry-btn">Strawberry</button>
      </section>
      <section className="results">
        <div className="chocolate">
          <p className="chocolate-result">
            <span className="bold">Chocolate: </span>

            <span className="percent">
              <span className="count">2 </span> (33.3%)
            </span>
          </p>
          <p className="chocolate-bar"></p>
        </div>
        <div className="vanilla">
          <p className="vanilla-result">
            <span className="bold">Vanilla: </span>

            <span className="percent">
              <span className="count">2 </span> (33.3%)
            </span>
          </p>
          <p className="vanilla-bar"></p>
        </div>
        <div className="strawberry">
          <p className="strawberry-result">
            <span className="bold">Strawberry: </span>

            <span className="percent">
              <span className="count">2 </span> (33.3%)
            </span>
          </p>
          <p className="strawberry-bar"></p>
        </div>
      </section>
    </div>
  );
};

export default Votes;
