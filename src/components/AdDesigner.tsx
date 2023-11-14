import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
  const [flavor, setFlavor] = useState("Chocolate");
  const [isDark, setIsDark] = useState(true);
  const [adFont, setAdFont] = useState(50);
  return (
    <div className="AdDesigner">
      <h2>Ad Designer</h2>
      <section
        className="design"
        style={
          !isDark
            ? {
                backgroundColor: "white",
                color: "black",
                border: "3px solid black",
              }
            : {}
        }
      >
        <p className="vote-for">Vote For</p>
        <p className="flavor caveat-font" style={{ fontSize: `${adFont}px` }}>
          {flavor}
        </p>
      </section>
      <h3>What to Support</h3>
      <section className="flavor-buttons">
        <button
          onClick={() => {
            setFlavor("Chocolate");
          }}
          className={flavor === "Chocolate" ? "isActive" : ""}
          disabled={flavor === "Chocolate" ? true : false}
        >
          Chocolate
        </button>
        <button
          onClick={() => {
            setFlavor("Vanilla");
          }}
          className={flavor === "Vanilla" ? "isActive" : ""}
          disabled={flavor === "Vanilla" ? true : false}
        >
          Vanilla
        </button>
        <button
          onClick={() => {
            setFlavor("Strawberry");
          }}
          className={flavor === "Strawberry" ? "isActive" : ""}
          disabled={flavor === "Strawberry" ? true : false}
        >
          Strawberry
        </button>
      </section>
      <h3>Color Theme</h3>
      <section className="color-theme-buttons">
        <button
          onClick={() => {
            setIsDark(false);
          }}
          className={!isDark ? "isActive" : ""}
          disabled={!isDark}
        >
          Light
        </button>
        <button
          onClick={() => {
            setIsDark(true);
          }}
          className={isDark ? "isActive" : ""}
          disabled={isDark}
        >
          Dark
        </button>
      </section>
      <h3>Font Size</h3>
      <section className="font-size-section">
        <button
          onClick={() => {
            setAdFont((prev) => prev - 2);
          }}
          className="down"
        >
          Down
        </button>
        <p className="ad-design-font">{adFont}</p>
        <button
          onClick={() => {
            setAdFont((prev) => prev + 2);
          }}
          className="up"
        >
          Up
        </button>
      </section>
    </div>
  );
};

export default AdDesigner;
