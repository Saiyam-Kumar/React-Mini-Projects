import Father from "./father";

const Grandfather = () => {
  return (
    <div>
      <h2>Grandfather Component</h2>
      <p>Does not receive any props.</p>
      <Father />
    </div>
  );
};

export default Grandfather;