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
            <Votes />
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
