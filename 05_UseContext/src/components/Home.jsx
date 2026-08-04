import { useContext } from "react";
import UserContext from "./UserContext";
import "./Context.css";

const Home = () => {
  const user = useContext(UserContext);

  return (
    <div className="card">
      <h2>Home Component</h2>

      <p>Reading data directly from Context API.</p>

      <hr />

      <h3>Student Profile</h3>

      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>UID:</strong> {user.uid}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Department:</strong> {user.dept}</p>
    </div>
  );
};

export default Home;