import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  const user = "Theodore";
  return (
    <div className="App">
      <Header user={user} />
      <main>
        <section className="ad-examples">
          <Ad flavor="Chocolate" isDark={true} adFont={50} />
          <Ad flavor="Vanilla" isDark={false} adFont={80} />
          <Ad flavor="Strawberry" isDark={false} adFont={20} />
        </section>
        <div className="ad-builder">
          <section className="ad-designer">
            <AdDesigner />
          </section>
          <section className="vote">
            <Votes
              flavor1="Blue Moon"
              flavor2="Mint Chocolate Chip"
              flavor3="Cotton Candy"
              flavor1Color="#3686A0"
              flavor2Color="#BDE8D4"
              flavor3Color="rgba(246, 112, 181, 0.8)"
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
