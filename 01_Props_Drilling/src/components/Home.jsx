import "./Home.css";

const Home = (props) => {
  return (
    <div className="card">
      <h2>Student Profile</h2>
      <hr />

      <p><strong>Name:</strong> {props.name}</p>
      <p><strong>UID:</strong> {props.uid}</p>
      <p><strong>Age:</strong> {props.age}</p>
      <p><strong>Department:</strong> {props.dept}</p>
    </div>
  );
};

export default Home;