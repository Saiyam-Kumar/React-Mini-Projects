import Home from "./Home";

const Child = (props) => {
  return (
    <div className="box">
      <h2>Child Component</h2>
      <p>Passes props to Home.</p>

      <Home
        name={props.name}
        uid={props.uid}
        age={props.age}
        dept={props.dept}
      />
    </div>
  );
};

export default Child;