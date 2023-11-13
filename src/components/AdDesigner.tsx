import "./AdDesigner.css";

const AdDesigner = () => {
  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <section className="design">
        <p className="vote-for">Vote For</p>
        <p className="flavor caveat-font">Chocolate</p>
      </section>
      <h3>What to Support</h3>
      <section className="flavor-buttons">
        <button className="chocolate">Chocolate</button>
        <button className="vanilla">Vanilla</button>
        <button className="strawberry">Strawberry</button>
      </section>
      <h3>Color Theme</h3>
      <section className="color-theme-buttons">
        <button className="light">Light</button>
        <button className="dark">Dark</button>
      </section>
      <h3>Font Size</h3>
      <section className="font-size-section">
        <button className="down">Down</button>
        <p className="ad-design-font">56</p>
        <button className="up">Up</button>
      </section>
    </div>
  );
};

export default AdDesigner;
