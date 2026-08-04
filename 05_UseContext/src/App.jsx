import Grandfather from "./components/grandfather";
import UserContext from "./components/UserContext";
import "./components/Context.css";

function App() {
  const user = {
    name: "Saiyam Kumar",
    uid: "24BCS10108",
    age: 20,
    dept: "Computer Science & Engineering",
  };

  return (
    <UserContext.Provider value={user}>
      <div>
        <h1>React Context API</h1>
        <p>
          Sharing student data using Context API without prop drilling.
        </p>
        <h3>User Data Created in App.jsx</h3>
        <Grandfather />
      </div>
    </UserContext.Provider>
  );
}

export default App;