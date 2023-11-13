import "./App.css";
import Header from "./components/Header";
import AdDesigner from "./components/AdDesigner";
import Votes from "./components/Votes";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="ad-designer">
          <AdDesigner />
        </section>
        <section className="vote">
          <Votes />
        </section>
      </main>
    </div>
  );
}

export default App;
