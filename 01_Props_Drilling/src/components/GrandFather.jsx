import Father from "./Father";

const Grandfather = (props) => {
  return (
    <div className="box">
      <h2>Grandfather Component</h2>
      <p>Receives props from App and passes them to Father.</p>

      <Father
        name={props.name}
        uid={props.uid}
        age={props.age}
        dept={props.dept}
      />
    </div>
  );
};

export default Grandfather;