import Child from "./Child";

const Father = (props) => {
  return (
    <div className="box">
      <h2>Father Component</h2>
      <p>Passes props to Child.</p>

      <Child
        name={props.name}
        uid={props.uid}
        age={props.age}
        dept={props.dept}
      />
    </div>
  );
};

export default Father;