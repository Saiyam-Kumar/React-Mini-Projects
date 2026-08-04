import "./components/Home.css";
import Grandfather from "./components/Grandfather";

function App() {
  const name = "Saiyam Kumar";
  const uid = "24BCS10108";
  const age = 20;
  const dept = "Computer Science & Engineering";

  return (
    <>
      <h1 className="title">React Prop Drilling</h1>
      <p className="subtitle">
        Student data is passed from App → Grandfather → Father → Child → Home.
      </p>

      <Grandfather
        name={name}
        uid={uid}
        age={age}
        dept={dept}
      />
    </>
  );
}

export default App;