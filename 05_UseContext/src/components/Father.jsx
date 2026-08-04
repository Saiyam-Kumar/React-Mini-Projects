import Child from "./child";

const Father = () => {
  return (
    <div>
      <h2>Father Component</h2>
      <p>No props passed.</p>
      <Child />
    </div>
  );
};

export default Father;