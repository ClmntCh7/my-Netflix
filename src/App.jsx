import data from "./assets/movies_rnexgr.json";
import "./App.css";
import Logo from "./components/Logo";
import Section from "./components/Section";

const App = () => {
  return (
    <div className="container">
      <Logo />
      {data.map((cat, index) => {
        return (
          <Section
          className="section"
          key={index}
          category={cat.category}
          images={cat.images} />
        );
      })}
    </div>
  );
}

export default App;
